declare function importScripts(...urls: string[]): void;

let Module: any;

self.onmessage = async (e) => {
  const { type, data } = e.data;

  if (type === 'init') {
    importScripts('/models/whisper/helpers.js');
    importScripts('/models/whisper/main.js');

    Module = await (self as any).Module(); // now usable

    self.postMessage({ type: 'ready' });
  }

  if (type === 'transcribe') {
    if (!Module) return;

    try {
      const wavData = data as Uint8Array;

      // Write file to Emscripten's virtual FS
      Module.FS.writeFile('input.wav', wavData);

      // Run Whisper.cpp with CLI args (you can customize them)
      const args = [
        'main',
        '-m', 'models/ggml-base.en.bin', // model path inside the WASM FS
        '-f', 'input.wav',
        '-otxt',  // output .txt file
        '-of', 'output' // output prefix
      ];

      Module.callMain(args);

      // Wait for output
      const result = Module.FS.readFile('output.txt');
      const text = new TextDecoder().decode(result);

      self.postMessage({ type: 'transcript', text });
    } catch (err) {
      console.error('Transcription error:', err);
      self.postMessage({ type: 'error', message: 'Failed to transcribe' });
    }
  }
};

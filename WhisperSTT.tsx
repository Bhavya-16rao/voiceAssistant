// // components/WhisperSTT.tsx
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { WhisperTranscriber } from 'whisper-web-transcriber';

// export default function WhisperSTT() {
//   const [transcript, setTranscript] = useState('');
//   const transcriberRef = useRef<WhisperTranscriber | null>(null);

//   useEffect(() => {
//     const t = new WhisperTranscriber({
//       modelSize: 'base.en',             // choose model
//       sampleRate: 16000,
//       onTranscription: (text) => {
//         setTranscript((prev) => prev + ' ' + text);
//       },
//       onStatus: (status) => console.log('Status:', status),
//       debug: false,
//     });
//     transcriberRef.current = t;
//     t.loadModel();

//     return () => {
//       t.stopRecording();
//       t.destroy();
//     };
//   }, []);

//   const start = () => transcriberRef.current?.startRecording();
//   const stop = () => transcriberRef.current?.stopRecording();

//   return (
//     <div>
//       <h2>Live Transcript:</h2>
//       <p>{transcript}</p>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//     </div>
//   );
// }
// components/WhisperSTT.tsx


'use client';

import { useEffect, useRef, useState } from 'react';
import { WhisperTranscriber } from 'whisper-web-transcriber';

export default function WhisperSTT() {
  const [transcript, setTranscript] = useState('');
  const [modelReady, setModelReady] = useState(false);
  const transcriberRef = useRef<WhisperTranscriber | null>(null);

  useEffect(() => {
    const t = new WhisperTranscriber({
      modelPath: '/models/whisper/ggml-base.en.bin',
      filesPath: '/node_modules/whisper-web-transcriber/dist',
      
      sampleRate: 16000,
      onTranscription: (text) => setTranscript((prev) => prev + ' ' + text),
      onStatus: (status) => console.log('Status:', status),
      debug: false,
    });

    transcriberRef.current = t;

    t.loadModel().then(() => {
      console.log('✅ Model loaded');
      setModelReady(true);
    });

    return () => {
      t.stopRecording();
      t.destroy();
    };
  }, []);

  const start = () => {
    if (modelReady) {
      transcriberRef.current?.startRecording();
    } else {
      alert('Model is not loaded yet. Please wait...');
    }
  };

  const stop = () => {
    transcriberRef.current?.stopRecording();
  };

  return (
    <div>
      <h2>Live Transcript:</h2>
      <p>{transcript}</p>
      <button onClick={start} disabled={!modelReady}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

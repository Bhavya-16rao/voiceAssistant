# voiceAssistant
Voice Assistant in the Browser with Whisper + TTS

A fast, privacy-friendly, in-browser voice assistant built with Next.js, Whisper WASM, Web Workers, and Coqui TTS.
🎙️ Transcribes microphone input using OpenAI’s Whisper (WASM),
🗣️ Speaks responses using local text-to-speech – no server or API needed!
🚀 Features

  🧠 Client-side Speech-to-Text using Whisper WASM (via stream.js)

  🎧 Real-time Transcription with Web Worker for smooth UI

  🗣️ Text-to-Speech (TTS) with Coqui-style WebAssembly voice models

  ⚡ Fast load + offline-ready thanks to service worker and caching

  🪶 Built with Next.js 14, TypeScript, and React hooks


public/models/          # WASM + JS + model files (ggml-tiny.en.bin, stream.js, stream.wasm)
src/workers/             # whisperWorker.ts (WASM runs here)
src/components/          # WhisperSTT.tsx (connects mic + worker)

📦 Getting Started

git clone https://github.com/Bhavya-16rao/voice-assistant
cd voice-assistant
npm install
npm run dev

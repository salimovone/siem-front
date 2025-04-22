import { useState, useEffect, useRef } from 'react';

const useWebSocket = (url) => {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    // WebSocket ulanishini o‘rnatish
    const socket = new WebSocket(url);
    socketRef.current = socket;

    // Ulanish ochilganda
    socket.onopen = () => {
      setIsConnected(true);
      console.log('WebSocket ulanishi ochildi');
    };

    // Serverdan kelayotgan xabarlarni olish
    socket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    // Ulanish uzilganda
    socket.onclose = () => {
      setIsConnected(false);
      console.log('WebSocket ulanishi yopildi');
    };

    // Xatolik yuz berganda
    socket.onerror = (error) => {
      console.error('WebSocket xatosi:', error);
    };

    // Hookning tozalash bosqichi
    return () => {
      socket.close();
    };
  }, [url]);

  // Xabar yuborish funksiyasi
  const sendMessage = (message) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
    } else {
      console.error('WebSocket hali ulanmagan');
    }
  };

  return { messages, sendMessage, isConnected };
};

export default useWebSocket;

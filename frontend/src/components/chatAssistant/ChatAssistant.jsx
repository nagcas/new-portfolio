import './ChatAssistant.css';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

function ChatAssistant() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const { t, i18n } = useTranslation('global');

  const API_URL =
    import.meta.env.VITE_API_URL || 'http://localhost:8000';

  /*
   * Messaggio iniziale.
   *
   * Viene creato tramite una funzione per poterlo
   * ricreare anche quando cambia la lingua.
   */
  const getInitialMessage = () => ({
    sender: 'bot',
    text: t('chat.saluto'),
  });

  /*
   * Stato dei messaggi.
   */
  const [messages, setMessages] = useState(() => [
    {
      sender: 'bot',
      text: t('chat.saluto'),
    },
  ]);

  /*
   * Aggiorna il messaggio iniziale quando cambia lingua.
   *
   * Se la chat non è ancora iniziata, viene tradotto
   * il messaggio di benvenuto.
   *
   * Se invece esiste già una conversazione, i messaggi
   * precedenti non vengono modificati.
   */
  useEffect(() => {
    setMessages((previousMessages) => {
      if (
        previousMessages.length === 1 &&
        previousMessages[0].sender === 'bot'
      ) {
        return [getInitialMessage()];
      }

      return previousMessages;
    });
  }, [i18n.language]);

  /*
   * Scroll automatico verso l'ultimo messaggio.
   */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages, loading]);

  /*
   * Quando la chat viene aperta, porta il focus
   * automaticamente sul campo di input.
   */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  /*
   * Invia il messaggio al backend Django.
   */
  async function sendMessage(event) {
    event.preventDefault();

    const message = input.trim();

    /*
     * Evita:
     * - messaggi vuoti
     * - richieste simultanee
     */
    if (!message || loading) {
      return;
    }

    /*
     * Mostra immediatamente il messaggio dell'utente.
     */
    setMessages((previousMessages) => [
      ...previousMessages,
      {
        sender: 'user',
        text: message,
      },
    ]);

    setInput('');
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/gemini/api/v1/chat/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message,
          }),
        }
      );

      /*
       * Rate limit Django.
       */
      if (response.status === 429) {
        throw new Error(t('chat.riprova'));
      }

      /*
       * Gestione degli altri errori HTTP.
       */
      if (!response.ok) {
        throw new Error(t('chat.servizio'));
      }

      /*
       * Legge la risposta JSON.
       */
      const data = await response.json();

      /*
       * Aggiunge la risposta dell'assistente.
       */
      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: 'bot',
          text: data.reply || t('chat.valida'),
        },
      ]);
    } catch (error) {
      /*
       * Mostra l'errore direttamente nella chat.
       */
      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: 'bot',
          text: error.message || t('chat.storto'),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  /*
   * Cancella la conversazione e ripristina
   * il messaggio iniziale nella lingua corrente.
   */
  function clearChat() {
    setMessages([getInitialMessage()]);
    setInput('');

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }

  /*
   * Apre o chiude la finestra della chat.
   */
  function toggleChat() {
    setIsOpen((previousState) => !previousState);
  }

  return (
    <>
      {/* =========================================
          PULSANTE FLOTTANTE
          ========================================= */}
      {!isOpen && (
        <button
          type="button"
          className="chat-floating-button"
          onClick={toggleChat}
          aria-label={t('chat.apri')}
          title={t('chat.apri')}
        >
          <span className="chat-floating-icon">
            💬
          </span>

          <span
            className="chat-online-indicator"
            aria-hidden="true"
          />
        </button>
      )}

      {/* =========================================
          FINESTRA CHAT
          ========================================= */}
      {isOpen && (
        <div
          className="chat-modal"
          role="dialog"
          aria-modal="true"
          aria-label={t('chat.assistente')}
        >
          <div className="chat-container">

            {/* =====================================
                HEADER
                ===================================== */}
            <header className="chat-header">
              <div className="chat-header-info">

                <div
                  className="chat-avatar"
                  aria-hidden="true"
                >
                  🤖
                </div>

                <div className="chat-title">
                  <h2>
                    {t('chat.assistente-portfolio')}
                  </h2>

                  <div className="chat-status">
                    <span
                      className="chat-status-dot"
                      aria-hidden="true"
                    />

                    <span>
                      Online
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================
                  AZIONI HEADER
                  ================================= */}
              <div className="chat-header-actions">

                {/* Cancella conversazione */}
                <button
                  type="button"
                  className="chat-header-button"
                  onClick={clearChat}
                  disabled={loading}
                  aria-label={t('chat.cancella')}
                  title={t('chat.cancella')}
                >
                  🗑️
                </button>

                {/* Chiudi chat */}
                <button
                  type="button"
                  className="chat-header-button"
                  onClick={toggleChat}
                  aria-label={t('chat.chiudi')}
                  title={t('chat.chiudi')}
                >
                  ✕
                </button>
              </div>
            </header>

            {/* =====================================
                AREA MESSAGGI
                ===================================== */}
            <main
              className="chat-messages"
              aria-live="polite"
            >
              {messages.map((message, index) => (
                <div
                  key={`${message.sender}-${index}`}
                  className={`chat-message-row ${message.sender}`}
                >
                  {/* Avatar solamente per il bot */}
                  {message.sender === 'bot' && (
                    <div
                      className="chat-message-avatar"
                      aria-hidden="true"
                    >
                      🤖
                    </div>
                  )}

                  <div
                    className={`chat-message ${message.sender}`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* =================================
                  INDICATORE DI CARICAMENTO
                  ================================= */}
              {loading && (
                <div className="chat-message-row bot">
                  <div
                    className="chat-message-avatar"
                    aria-hidden="true"
                  >
                    🤖
                  </div>

                  <div
                    className="chat-message bot chat-typing"
                    aria-label="Assistant is typing"
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}

              {/* Riferimento per autoscroll */}
              <div ref={messagesEndRef} />
            </main>

            {/* =====================================
                FORM
                ===================================== */}
            <form
              className="chat-form"
              onSubmit={sendMessage}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                maxLength={500}
                disabled={loading}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                placeholder={t('chat.chiedi')}
                aria-label={t('chat.scrivi')}
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label={t('chat.invia')}
                title={t('chat.invia')}
              >
                ➤
              </button>
            </form>

            {/* =====================================
                FOOTER
                ===================================== */}
            <footer className="chat-footer">
              {t('chat.virtuale')}
            </footer>

          </div>
        </div>
      )}
    </>
  );
}

export default ChatAssistant;

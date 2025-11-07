import { useState, useEffect } from 'react'
import './Docs.css'

function Docs() {
  const [activeSection, setActiveSection] = useState('what-is-br-x402')
  const [expandedSections, setExpandedSections] = useState({
    'introduction': true,
    'user-guide': true,
    'developer-guide': true,
    'api-reference': true,
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuStructure = [
    {
      id: 'introduction',
      title: 'Introduction',
      children: [
        {
          id: 'overview',
          title: 'Overview',
          subChildren: [
            { id: 'what-is-br-x402', title: 'What is BRX402?' },
          ]
        },
        {
          id: 'core-concepts',
          title: 'Core Concepts',
          subChildren: [
            { id: 'br-x402-ecosystem', title: 'The BRX402 Ecosystem' },
          ]
        },
        {
          id: 'getting-access',
          title: 'Getting Access',
          subChildren: [
            { id: 'accessing-br-x402-tools', title: 'Accessing BRX402 Tools' },
          ]
        },
      ]
    },
    {
      id: 'user-guide',
      title: 'User Guide',
      children: [
        {
          id: 'the-extension',
          title: 'The Extension',
          subChildren: [
            { id: 'introduction-to-extension', title: 'Introduction to the Extension' },
          ]
        },
        {
          id: 'quick-start',
          title: 'Quick Start',
          subChildren: [
            { id: 'generating-instant-payment-link', title: 'Generating an Instant Payment Link' },
          ]
        },
        {
          id: 'core-features',
          title: 'Core Features',
          subChildren: [
            { id: 'using-drag-drop', title: 'Using Drag & Drop' },
            { id: 'managing-multiple-accounts', title: 'Managing Multiple Accounts' },
          ]
        },
      ]
    },
    {
      id: 'developer-guide',
      title: 'Developer Guide',
      children: [
        {
          id: 'authentication',
          title: 'Authentication',
          subChildren: [
            { id: 'authenticating-api-requests', title: 'Authenticating API Requests' },
          ]
        },
        {
          id: 'sdk-javascript',
          title: 'SDK (JavaScript)',
          subChildren: [
            { id: 'sdk-quick-start', title: 'SDK Quick Start' },
            { id: 'creating-payment-button', title: 'Creating a Payment Button' },
          ]
        },
        {
          id: 'webhooks',
          title: 'Webhooks',
          subChildren: [
            { id: 'handling-webhook-events', title: 'Handling Webhook Events' },
            { id: 'securing-webhook-endpoint', title: 'Securing Your Webhook Endpoint' },
          ]
        },
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      children: [
        {
          id: 'payments-api',
          title: 'Payments API',
          subChildren: [
            { id: 'create-payment-link', title: 'Create payment link' },
            { id: 'get-payment-status', title: 'Get payment status' },
          ]
        },
        {
          id: 'addresses-api',
          title: 'Addresses API',
          subChildren: [
            { id: 'create-managed-address', title: 'Create managed address' },
            { id: 'list-managed-addresses', title: 'List managed addresses' },
          ]
        },
        {
          id: 'webhook-events',
          title: 'Webhook Events',
          subChildren: [
            { id: 'event-transaction-received', title: 'Event: transaction.received' },
            { id: 'event-payment-completed', title: 'Event: payment.completed' },
          ]
        },
        {
          id: 'errors',
          title: 'Errors',
          subChildren: [
            { id: 'error-codes', title: 'Error Codes' },
          ]
        },
      ]
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      const allIds = []
      
      menuStructure.forEach(section => {
        section.children.forEach(child => {
          if (child.subChildren) {
            child.subChildren.forEach(subChild => {
              allIds.push(subChild.id)
            })
          } else {
            allIds.push(child.id)
          }
        })
      })

      for (let i = allIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(allIds[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(allIds[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  return (
    <div className="docs-page">
      <aside className={`docs-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Documentation</h2>
          <button 
            className="mobile-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ×
          </button>
        </div>
        <nav className="sidebar-nav">
          {menuStructure.map((section) => (
            <div key={section.id} className="nav-section">
              <button
                className="nav-section-title"
                onClick={() => toggleSection(section.id)}
              >
                <span>{section.title}</span>
                <span className={`nav-arrow ${expandedSections[section.id] ? 'expanded' : ''}`}>▼</span>
              </button>
              {expandedSections[section.id] && (
                <div className="nav-children">
                  {section.children.map((child) => (
                    <div key={child.id} className="nav-child-group">
                      <button
                        className={`nav-item nav-child ${activeSection === child.id ? 'active' : ''}`}
                        onClick={() => scrollToSection(child.id)}
                      >
                        {child.title}
                      </button>
                      {child.subChildren && (
                        <div className="nav-sub-children">
                          {child.subChildren.map((subChild) => (
                            <button
                              key={subChild.id}
                              className={`nav-item nav-sub-child ${activeSection === subChild.id ? 'active' : ''}`}
                              onClick={() => scrollToSection(subChild.id)}
                            >
                              {subChild.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      <div className="docs-main">
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          ☰
        </button>

        <div className="docs-content">
          <section id="introduction" className="docs-section">
            <h1 className="section-title">Introduction</h1>
            
            <section id="overview" className="subsection">
              <h2 className="subsection-title">Overview</h2>
              
              <section id="what-is-br-x402" className="subsubsection">
                <h3 className="subsubsection-title">What is <span className="brand-name">BRX402</span>?</h3>
                <p className="section-text">
                  <span className="brand-name">BRX402</span> is a utility suite designed to abstract the complexity of the X402 protocol. 
                  It provides simple tools for users and powerful, simple-to-integrate APIs for developers, 
                  turning X402 into a seamless part of any web application.
                </p>
              </section>
            </section>

            <section id="core-concepts" className="subsection">
              <h2 className="subsection-title">Core Concepts</h2>
              
              <section id="br-x402-ecosystem" className="subsubsection">
                <h3 className="subsubsection-title">The <span className="brand-name">BRX402</span> Ecosystem</h3>
                <p className="section-text">
                  The ecosystem consists of two main components:
                </p>
                <ol className="feature-list">
                  <li className="feature-list-item">
                    <strong>The Extension:</strong> A browser tool for end-users to manage payments and generate links via drag-and-drop.
                  </li>
                  <li className="feature-list-item">
                    <strong>The API & SDK:</strong> A set of tools for developers to integrate X402 payments directly into their services, similar to a modern payment gateway.
                  </li>
                </ol>
              </section>
            </section>

            <section id="getting-access" className="subsection">
              <h2 className="subsection-title">Getting Access</h2>
              
              <section id="accessing-br-x402-tools" className="subsubsection">
                <h3 className="subsubsection-title">Accessing <span className="brand-name">BRX402</span> Tools</h3>
                <p className="section-text">
                  Access to the <span className="brand-name">BRX402</span> Extension and API keys is currently managed via the <span className="brand-name">BRX402</span> Dashboard. 
                  Contact our team to get your account provisioned and generate your first API keys.
                </p>
              </section>
            </section>
          </section>

          <section id="user-guide" className="docs-section">
            <h1 className="section-title">User Guide</h1>
            
            <section id="the-extension" className="subsection">
              <h2 className="subsection-title">The Extension</h2>
              
              <section id="introduction-to-extension" className="subsubsection">
                <h3 className="subsubsection-title">Introduction to the Extension</h3>
                <p className="section-text">
                  The <span className="brand-name">BRX402</span> Extension is a powerful browser add-on that acts as your primary X402 wallet and interaction tool. 
                  It allows you to send payments, manage accounts, and generate payment links without leaving your current tab.
                </p>
              </section>
            </section>

            <section id="quick-start" className="subsection">
              <h2 className="subsection-title">Quick Start</h2>
              
              <section id="generating-instant-payment-link" className="subsubsection">
                <h3 className="subsubsection-title">Generating an Instant Payment Link</h3>
                <ol className="feature-list">
                  <li className="feature-list-item">Click the <span className="brand-name">BRX402</span> icon in your browser toolbar.</li>
                  <li className="feature-list-item">Select the 'Receive' tab.</li>
                  <li className="feature-list-item">Enter the amount you wish to receive.</li>
                  <li className="feature-list-item">Click 'Generate Link'. The unique payment URL is immediately copied to your clipboard.</li>
                </ol>
              </section>
            </section>

            <section id="core-features" className="subsection">
              <h2 className="subsection-title">Core Features</h2>
              
              <section id="using-drag-drop" className="subsubsection">
                <h3 className="subsubsection-title">Using Drag & Drop</h3>
                <p className="section-text">
                  <span className="brand-name">BRX402</span>'s most powerful feature.
                </p>
                <p className="section-text">
                  <strong>To Pay:</strong> Drag any X402 address (x402_...) from a webpage and drop it onto the extension icon to open a pre-filled 'Send' popup.
                </p>
                <p className="section-text">
                  <strong>To Request:</strong> Drag a price text (e.g., "$19.99") and drop it onto the icon to instantly generate a payment link for that exact amount.
                </p>
              </section>

              <section id="managing-multiple-accounts" className="subsubsection">
                <h3 className="subsubsection-title">Managing Multiple Accounts</h3>
                <p className="section-text">
                  The extension allows you to add multiple X402 accounts. You can easily switch between your 'Personal' or 'Business' accounts 
                  from the main dropdown menu to keep your transactions separate.
                </p>
              </section>
            </section>
          </section>

          <section id="developer-guide" className="docs-section">
            <h1 className="section-title">Developer Guide</h1>
            
            <section id="authentication" className="subsection">
              <h2 className="subsection-title">Authentication</h2>
              
              <section id="authenticating-api-requests" className="subsubsection">
                <h3 className="subsubsection-title">Authenticating API Requests</h3>
                <p className="section-text">
                  All API requests must be authenticated using a Secret Key. Pass your key in the Authorization header as a Bearer token.
                </p>
                <div className="code-block">
                  <pre className="code-pre">
{`Authorization: Bearer sk_test_YOUR_SECRET_KEY`}
                  </pre>
                </div>
                <p className="section-text">
                  Keep your Secret Key secure and never expose it on the client-side.
                </p>
              </section>
            </section>

            <section id="sdk-javascript" className="subsection">
              <h2 className="subsection-title">SDK (JavaScript)</h2>
              
              <section id="sdk-quick-start" className="subsubsection">
                <h3 className="subsubsection-title">SDK Quick Start</h3>
                <p className="section-text">
                  The <span className="brand-name">BRX402</span> JavaScript SDK provides the simplest way to create front-end payment experiences. 
                  Once the SDK is loaded on your page, you can initialize it with your Public Key.
                </p>
              </section>

              <section id="creating-payment-button" className="subsubsection">
                <h3 className="subsubsection-title">Creating a Payment Button</h3>
                <p className="section-text">
                  To create a payment button, first define a placeholder element in your HTML:
                </p>
                <div className="code-block">
                  <pre className="code-pre">
{`<button id="x402-payment-btn"></button>`}
                  </pre>
                </div>
                <p className="section-text">
                  Then, use the SDK to mount the button logic:
                </p>
                <div className="code-block">
                  <pre className="code-pre">
{`// Initialize with your Public Key
const x402 = BRX402('pk_test_YOUR_PUBLIC_KEY');

// Create the button
x402.createPaymentButton({
  element: '#x402-payment-btn',
  amount: '29.99',
  currency: 'USD',
  memo: 'product_id_12345',

  onSuccess: (response) => {
    console.log('Payment Success! TXID:', response.txId);
    window.location.href = '/payment-success';
  },
  onCancel: () => {
    console.log('Payment was canceled by the user.');
  }
});`}
                  </pre>
                </div>
              </section>
            </section>

            <section id="webhooks" className="subsection">
              <h2 className="subsection-title">Webhooks</h2>
              
              <section id="handling-webhook-events" className="subsubsection">
                <h3 className="subsubsection-title">Handling Webhook Events</h3>
                <p className="section-text">
                  To receive real-time notifications for events (like a successful payment), you must configure a webhook endpoint 
                  in your <span className="brand-name">BRX402</span> Dashboard. Our server will send a POST request to your URL when an event occurs.
                </p>
              </section>

              <section id="securing-webhook-endpoint" className="subsubsection">
                <h3 className="subsubsection-title">Securing Your Webhook Endpoint</h3>
                <p className="section-text">
                  It is critical to verify that incoming webhooks are from <span className="brand-name">BRX402</span>. Every request includes a 
                  <code className="code-inline">X-<span className="brand-name">BRX402</span>-Signature</code> header. You must verify this signature using your Webhook Signing Secret 
                  to prevent spoofing. (Detailed signature verification guide...)
                </p>
              </section>
            </section>
          </section>

          <section id="api-reference" className="docs-section">
            <h1 className="section-title">API Reference</h1>
            
            <section id="payments-api" className="subsection">
              <h2 className="subsection-title">Payments API</h2>
              
              <section id="create-payment-link" className="subsubsection">
                <h3 className="subsubsection-title">Create payment link</h3>
                <p className="section-text">
                  <strong>POST /v1/payments/create_link</strong>
                </p>
                <p className="section-text">
                  Creates a new, single-use payment link. This is the API equivalent of the 'Instant Link' feature.
                </p>
                
                <h4 className="subsubsubsection-title">Body</h4>
                <ul className="feature-list">
                  <li className="feature-list-item">
                    <code className="code-inline">amount</code> (string, required): The amount to request.
                  </li>
                  <li className="feature-list-item">
                    <code className="code-inline">currency</code> (string, required): 3-letter ISO currency code.
                  </li>
                  <li className="feature-list-item">
                    <code className="code-inline">memo</code> (string, optional): Internal reference ID.
                  </li>
                  <li className="feature-list-item">
                    <code className="code-inline">expiresIn</code> (integer, optional): Link expiration time in seconds. Default: 900.
                  </li>
                </ul>

                <h4 className="subsubsubsection-title">Response</h4>
                <div className="code-block">
                  <pre className="code-pre">
{`{
  "linkId": "plink_...",
  "url": "https://pay.brx402.com/...",
  ...
}`}
                  </pre>
                </div>
              </section>

              <section id="get-payment-status" className="subsubsection">
                <h3 className="subsubsection-title">Get payment status</h3>
                <p className="section-text">
                  <strong>GET /v1/payments/status/{'{linkId}'}</strong>
                </p>
                <p className="section-text">
                  Retrieves the current status of a payment link.
                </p>

                <h4 className="subsubsubsection-title">Path Parameters</h4>
                <ul className="feature-list">
                  <li className="feature-list-item">
                    <code className="code-inline">linkId</code> (string, required): The ID of the payment link.
                  </li>
                </ul>

                <h4 className="subsubsubsection-title">Response</h4>
                <div className="code-block">
                  <pre className="code-pre">
{`{
  "linkId": "plink_...",
  "status": "completed",
  "transaction": {
    ...
  }
}`}
                  </pre>
                </div>
                <p className="section-text">
                  Status can be "pending", "completed", "expired", or "failed".
                </p>
              </section>
            </section>

            <section id="addresses-api" className="subsection">
              <h2 className="subsection-title">Addresses API</h2>
              
              <section id="create-managed-address" className="subsubsection">
                <h3 className="subsubsection-title">Create managed address</h3>
                <p className="section-text">
                  <strong>POST /v1/addresses/create</strong>
                </p>
                <p className="section-text">
                  Creates a unique, managed X402 deposit address tied to one of your users.
                </p>

                <h4 className="subsubsubsection-title">Body</h4>
                <ul className="feature-list">
                  <li className="feature-list-item">
                    <code className="code-inline">userIdentifier</code> (string, required): A unique ID for this user in your system.
                  </li>
                  <li className="feature-list-item">
                    <code className="code-inline">webhookUrl</code> (string, required): The URL to notify when this address receives a transaction.
                  </li>
                  <li className="feature-list-item">
                    <code className="code-inline">label</code> (string, optional): A human-readable label.
                  </li>
                </ul>

                <h4 className="subsubsubsection-title">Response</h4>
                <div className="code-block">
                  <pre className="code-pre">
{`{
  "address": "x402_UniqueAddress_...",
  "userIdentifier": "user_12345",
  ...
}`}
                  </pre>
                </div>
              </section>

              <section id="list-managed-addresses" className="subsubsection">
                <h3 className="subsubsection-title">List managed addresses</h3>
                <p className="section-text">
                  <strong>GET /v1/addresses</strong>
                </p>
                <p className="section-text">
                  Returns a paginated list of all managed addresses you have created.
                </p>

                <h4 className="subsubsubsection-title">Query Parameters</h4>
                <ul className="feature-list">
                  <li className="feature-list-item">
                    <code className="code-inline">userIdentifier</code> (string, optional): Filter list by user ID.
                  </li>
                  <li className="feature-list-item">
                    <code className="code-inline">limit</code> (integer, optional): Default: 20.
                  </li>
                  <li className="feature-list-item">
                    <code className="code-inline">offset</code> (integer, optional): Default: 0.
                  </li>
                </ul>

                <h4 className="subsubsubsection-title">Response</h4>
                <div className="code-block">
                  <pre className="code-pre">
{`{
  "data": [
    {
      "address": "...",
      ...
    },
    ...
  ],
  "pagination": {
    ...
  }
}`}
                  </pre>
                </div>
              </section>
            </section>

            <section id="webhook-events" className="subsection">
              <h2 className="subsection-title">Webhook Events</h2>
              
              <section id="event-transaction-received" className="subsubsection">
                <h3 className="subsubsection-title">Event: transaction.received</h3>
                <p className="section-text">
                  Sent when a managed address receives a confirmed transaction.
                </p>

                <h4 className="subsubsubsection-title">Payload</h4>
                <div className="code-block">
                  <pre className="code-pre">
{`{
  "event": "transaction.received",
  "data": {
    "txId": "tx_...",
    "toAddress": "x402_...",
    "amount": "50.00",
    "userIdentifier": "user_12345",
    ...
  }
}`}
                  </pre>
                </div>
              </section>

              <section id="event-payment-completed" className="subsubsection">
                <h3 className="subsubsection-title">Event: payment.completed</h3>
                <p className="section-text">
                  Sent when a payment link is successfully paid.
                </p>

                <h4 className="subsubsubsection-title">Payload</h4>
                <div className="code-block">
                  <pre className="code-pre">
{`{
  "event": "payment.completed",
  "data": {
    "linkId": "plink_...",
    "status": "completed",
    "memo": "order_id_98765",
    "transaction": {
      ...
    }
  }
}`}
                  </pre>
                </div>
              </section>
            </section>

            <section id="errors" className="subsection">
              <h2 className="subsection-title">Errors</h2>
              
              <section id="error-codes" className="subsubsection">
                <h3 className="subsubsection-title">Error Codes</h3>
                <p className="section-text">
                  Lists all possible API error codes and their meanings.
                </p>
                <ul className="feature-list">
                  <li className="feature-list-item">
                    <strong>400 Bad Request:</strong> The request body is malformed.
                  </li>
                  <li className="feature-list-item">
                    <strong>401 Unauthorized:</strong> Invalid or missing API key.
                  </li>
                  <li className="feature-list-item">
                    <strong>404 Not Found:</strong> The requested resource does not exist.
                  </li>
                  <li className="feature-list-item">
                    <strong>429 Too Many Requests:</strong> You have exceeded the rate limit.
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Docs

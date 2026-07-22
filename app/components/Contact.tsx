import React from "react"

export const Contact: React.FC = () => (
  <div className="max-w-2xl mx-auto p-6">
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
      <div className="flex flex-col items-start gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-semibold text-lg">GitHub:</span>
            <a
              href="https://github.com/The-fthe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors flex items-center gap-1"
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="underline">The-fthe</span>
            </a>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-semibold text-lg">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/chee-seng-lam-5515081a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors flex items-center gap-1"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
              </svg>
              <span className="underline">chee-seng-lam-5515081a4</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-lg">Email:</span>
            <a
              href="mailto:lcslianandfthe.cs@gmail.com"
              className="text-gray-700 hover:underline flex items-center gap-1"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 12c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>lcslianandfthe.cs@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
)


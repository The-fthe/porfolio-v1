export function Profile() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="avatar" aria-label="ラーム チーシン">
        CS
      </div>
      <div className="flex-1">
        <h2 className="section-head">プロフィール</h2>
        <p className="lede">
          はじめまして、ラーム チーシン（ランキ）です。
          ゲームプログラマーとして Unity/C#
          を約4年経験し、教育・知育・Nintendo
          Switch向けタイトルで、クライアント実装、保守運用、移植を担当してきました。
          実装だけでなく、エディタ拡張などのツール整備やビルド・検証の効率化といった運用改善にも取り組んでいます。
          日本語、英語、中国語、広東語が話せます。
        </p>
      </div>
    </div>
  )
}

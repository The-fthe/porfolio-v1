export function Profile() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-gray-200">
        <img
          src="/profile-placeholder.jpg"
          alt="プロフィール写真"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">プロフィール</h2>
        <p className="text-lg mb-4">
          株式会社カエルエックスでゲームプログラマーとして活躍中のラームチーシンです。
          Unityを中心に、モバイル・Switch・Webなど多様なプラットフォームでのゲーム開発・運用経験があります。
          標準化やドキュメント作成、プロジェクト管理にも注力し、チームの生産性向上に貢献しています。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">会社履歴:</h3>
            <ul className="space-y-2">
              <li>
                <div className="font-medium">株式会社カエルエックス</div>
                <div className="text-gray-600">2022年3月～現在</div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">テクニカルスキル:</h3>
            <ul className="space-y-2">
              <li>
                <div className="font-medium">Unity / C#</div>
                <div className="text-gray-600">5年（通常業務で使用可能）</div>
              </li>
              <li>
                <div className="font-medium">Git</div>
                <div className="text-gray-600">3年（通常業務で使用可能）</div>
              </li>
              <li>
                <div className="font-medium">Python / Javascript / Golang</div>
                <div className="text-gray-600">2年（業務経験はないが使用経験有）</div>
              </li>
              <li>
                <div className="font-medium">Unreal</div>
                <div className="text-gray-600">1年（業務経験はないが使用経験有）</div>
              </li>
              <li>
                <div className="font-medium">Kotlin</div>
                <div className="text-gray-600">0.5年（業務経験はないが使用経験有）</div>
              </li>
              <li>
                <div className="font-medium">Swift</div>
                <div className="text-gray-600">1ヶ月（業務で使用経験有）</div>
              </li>
              <li>
                <div className="font-medium">Vim</div>
                <div className="text-gray-600">4年（通常業務で使用可能）</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold mb-2">職務経歴概要:</h3>
          <p className="mb-4">
            ●●大学卒業後、株式会社カエルエックスへ新卒入社し、インゲーム開発全般を担当。
            Unityを用いた受託・自社案件の新規開発から運用、リリース対応まで幅広く経験。
            標準化やドキュメント作成にも注力し、チームの生産性向上に貢献しています。
          </p>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold mb-2">主なプロジェクト実績:</h3>
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li>
              <span className="font-medium">あそびタッチ（iOS/Android）</span>：
              ミニゲーム管理システム、SpriteAtlas、Firebase、Admob Mediation等の実装。コード標準化・共通ライブラリ導入で移植効率化。
            </li>
            <li>
              <span className="font-medium">壁ドン彼氏 ～真夏のチャラ男～（Switch）</span>：
              ビジュアルノベルツール機能追加、AssetBundle導入、スクリーンショット機能追加。
            </li>
            <li>
              <span className="font-medium">アイフリークモバイルアプリ（iOS/Android）</span>：
              クライアントアプリメンテナンス、ビルド手順統一、オフショア進捗管理、Unityバージョン管理。
            </li>
            <li>
              <span className="font-medium">ヨセカとグリカ（Web）</span>：
              Blenderで3D動画作成・編集、Eeveeレンダリング活用。
            </li>
            <li>
              <span className="font-medium">Zooレポ（iOS）</span>：
              HealthKitプラグイン開発、formUI機能追加、データ取得機能実装。
            </li>
            <li>
              <span className="font-medium">成人ゲーム（PC）</span>：
              ローカライズデータ抽出・導入、PlayMakerバグ修正、マルチ言語対応。
            </li>
            <li>
              <span className="font-medium">ごっこランド東亜建設工業（iOS/Android）</span>：
              新規クライアント開発、スライドパズル実装、Timeline演出、Unitask/UniRx/Addressable活用。
            </li>
            <li>
              <span className="font-medium">学研ドラゴンドリル（Amazon）</span>：
              移植クライアント開発、SpriteAtlas、UniTest、デバッグツール導入。
            </li>
            <li>
              <span className="font-medium">アイソメトリックゲーム（Switch）</span>：
              クライアント開発、キャラクター・ゲームルール・アイテム実装、デバッグツール導入。
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold mb-2">自己PR:</h3>
          <p className="mb-2">
            <span className="font-bold">Unityを活用したゲーム開発と最適化経験</span>
            <br />
            3年間で株式会社カエルエックスにて多くのモバイルゲーム開発を担当。ミニゲーム管理システムやSpriteAtlas、Firebase等を実装し、コード標準化・共通ライブラリ導入で移植効率化・拡張性向上・パフォーマンス最適化を実現。Unitask、UniRx、Addressable技術も活用可能。
          </p>
          <p>
            <span className="font-bold">プロジェクト管理とアプリケーション運用スキル</span>
            <br />
            複数アプリの一元管理やビルド手順の簡素化、オフショアエンジニアとの協働、詳細なドキュメント作成、Gitによる進捗管理、Unityバージョン管理の改善など、効率的な開発体制を構築。C#を中心に、iOS/AndroidネイティブプラグインやPythonでのデータ処理など幅広い技術に対応。
          </p>
        </div>
      </div>
    </div>
  )
}


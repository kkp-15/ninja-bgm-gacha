function runGacha(){
  /* …略… */
  const pick = list[Math.floor(Math.random()*list.length)];

  // ▼▼ ここが “動画 or プレイリスト” 判定         ← 必ず入っているか確認
  const url = pick.id.startsWith("PL")
    ? `https://www.youtube.com/embed?listType=playlist&list=${pick.id}&autoplay=1&playsinline=1&controls=1`
    : `https://www.youtube.com/embed/${pick.id}?autoplay=1&playsinline=1&controls=1`;

  player.src = url;
  /* …略… */
}

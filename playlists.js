function runGacha(){
  const list = window.PLAYLISTS.playlists;
  const pick = list[Math.floor(Math.random()*list.length)];

  // ── 動画IDかプレイリストIDか判定
  const isPlaylist = pick.id.startsWith("PL");

  // ── 埋め込みURLを分岐生成
  const url = isPlaylist
    ? `https://www.youtube.com/embed?listType=playlist&list=${pick.id}&autoplay=1&playsinline=1&controls=1`
    : `https://www.youtube.com/embed/${pick.id}?autoplay=1&playsinline=1&loop=1&playlist=${pick.id}&controls=1`;

  player.src = url;                      // ← ここにセット
  titleEl.textContent = '🎧 ' + pick.title;
  resBox.style.display = 'block';
}

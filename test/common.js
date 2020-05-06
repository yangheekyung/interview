function addComment(content) {
  return `
  <li class="comment">
    <img width="40xp" height=40px" src="https://www.buira.org/assets/images/shared/default-profile.png">
    <div>작성자</div>
    <time>2019-09-06</time>
    <p>${content}</p>
  </li>
  `;
}
const btnAdd = document.querySelector("#btn-add");
const codeHtml = document.querySelector("#code-html");
const listItemLi = document.querySelector("#list-item-li");

var urlMain = [];
var urlImgList = [];

btnAdd.addEventListener("click", () => {
  let width = document.querySelector("#width");
  let height = document.querySelector("#height");
  let urlImg = document.querySelector("#url-img");

  urlImgList.push(urlImg.value);

  let urlChild = `<p><img alt="" src="${urlImg.value}" style="height:${height.value}px;width:${width.value}px"/></p>`;

  if (width.value == "" || height.value == "")
    urlChild = `<p><img alt="" src="${urlImg.value}"/></p>`;
  urlMain.push(urlChild);

  renderHtmlCode(urlMain);
  renderListImage(urlImgList);

  urlImg.value = "";
});

function renderHtmlCode(urlMain) {
  let html = "";
  urlMain.map((value) => {
    html += value;
  });
  codeHtml.value = html;
  document.querySelector("#url-img").value = "";
}

function renderListImage(urlImgList) {
  let htmlLiImg = "";
  urlImgList.map((value, index) => {
    htmlLiImg += `<li class="images_list-child">
                    <img src="${value}" style="height:50px;width:100px" alt="">
                    <button type="button" class="btn btn-secondary container__item-delete" onClick="deleteURL(${index})">Xóa</button>
                  </li>`;
  });
  listItemLi.innerHTML = htmlLiImg;
}

function deleteURL(index) {
  urlMain.splice(index, 1);
  urlImgList.splice(index, 1);
  renderHtmlCode(urlMain);
  renderListImage(urlImgList);
}

function copy() {
  codeHtml.select();
  document.execCommand("copy");
}
const result = document.getElementById("result");

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const exactText = document.getElementById("exactText").value;
  const exactTextVal = exactText ? `"${exactText}"` : "";

  const negativeWord = document.getElementById("negativeWord").value;
  const negativeWordVal = negativeWord ? `-${negativeWord}` : "";

  const exactWord = document.getElementById("exactWord").value;
  const exactWordVal = exactWord ? `+${exactWord}` : "";

  const inUrl = document.getElementById("inUrl").value;
  const inUrlVal = inUrl ? `inurl:${inUrl}` : "";

  const inTitle = document.getElementById("inTitle").value;
  const inTitleVal = inTitle ? `intitle:${inTitle}` : "";

  const website = document.getElementById("website").value;
  const websiteVal = website ? `site:${website}` : "";

  const fileType = document.getElementById("fileType").value;
  const fileTypeVal = fileType ? `filetype:${fileType}` : "";

  const dateBefore = document.getElementById("dateBefore").value;
  const dateBeforeVal = dateBefore ? `before:${dateBefore}` : "";

  const dateAfter = document.getElementById("dateAfter").value;
  const dateAfterVal = dateAfter ? `after:${dateAfter}` : "";

  const queryParts = [
    exactTextVal,
    negativeWordVal,
    exactWordVal,
    inUrlVal,
    inTitleVal,
    websiteVal,
    fileTypeVal,
    dateBeforeVal,
    dateAfterVal,
  ].filter((part) => part);

  result.innerHTML = queryParts.join(" ");
});

result.addEventListener("click", function () {
  const text = this.innerHTML.trim();

  navigator.clipboard
    .writeText(text)
    .then(() => alert("Content copied, please paste into Google!"))
    .catch((err) => {
      console.error(err);
      alert(
        "An error occured while copying content, please copy the line manually;"
      );
    });
});

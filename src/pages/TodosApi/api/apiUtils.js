export function parseLinks(linkObj) {
  let parsedLinks = {};
  let linkValue = linkObj.split("link:");
  let allLinks = linkValue.length == 2 ? linkValue[1] : linkObj;
  let linksArray = allLinks.split(","); //split a string into array:
  /*
      example of how linksArray may looks for page 2:
      [
      "<http://localhost:3011/glosses/?_page=1>; rel=\"first\"",
      " <http://localhost:3011/glosses/?_page=1>; rel=\"prev\"",
      " <http://localhost:3011/glosses/?_page=3>; rel=\"next\"",
      " <http://localhost:3011/glosses/?_page=3>; rel=\"last\""
      ]
      */
  for (let link of linksArray) {
    let links = /<([^>]+)>;\s+rel="([^"]+)"/gi.exec(link);
    parsedLinks[links[2]] = links[1];
  }
  return parsedLinks;
}

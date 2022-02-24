const socialMediaLinks = {
  github: 'lpLencone',
  youtube: 'UCveAI4ZnPn0dzPp7CdW4QjA',
  instagram: 'strategistaware',
  reddit: 'user/C9nstructAware',
  twitter: 'constructaware'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const socialMedia = li.getAttribute('id')
    li.children[0].href = `https://www.${socialMedia}.com/${socialMediaLinks[socialMedia]}`
  }
}

changeSocialMediaLinks()

function getJSONgithub(user) {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  // fetch: fetch the page's response on the url; then: gets the response and turns it into json
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name // document.querySelector('#userName').innerHTML = data.name
      description.textContent = data.bio // document.querySelector('#description').innerHTML = data.bio
      githubLogin.textContent = data.login // document.querySelector('#github').innerHTML = data.login
      githubLogin.href = data.html_url
      avatarImage.src = data.avatar_url
    })
}

getJSONgithub()

class User {
  constructor(user) {
    const { id, name, username, email, address, phone, website, company } =
      user;
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;
  }

  getUserInfo() {
    return `
        <p>Id: ${this.id}</p>
        <p>Name: ${this.name}</p>
        <p>Username: ${this.username}</p>
        <p>Email: ${this.email}</p>
        <p>Address: 
          ${this.address["street"]}, 
          ${this.address["suite"]},
          ${this.address["city"]},
          ${this.address["zipcode"]}
        </p>
        <p>Lat & lng: 
          ${this.address["geo"]["lat"]}, 
          ${this.address["geo"]["lng"]}
        </p>
        <p>Phone: ${this.phone}</p>
        <p>Website: ${this.website}</p>
        <p>Company: 
          ${this.company["name"]},
          ${this.company["catchPhrase"]},
          ${this.company["bs"]}
        </p>
    `;
  }
}

export { User };

import "./styles.css";

interface Contact {
  id: number;
  name: string;
  phone: string;
  isEditing?: boolean;
}

let contacts: Contact[] = [];
let currentId: number = 1;

function addContact(name: string, phone: string): void {
  const contact: Contact = {
    id: currentId++,
    name,
    phone,
  };

  contacts.push(contact);
  render();
}

function deleteContact(id: number): void {
  contacts = contacts.filter((contact) => contact.id !== id);
  render();
}

function editContact(
  id: number,
  updateName: string,
  updatePhone: string
): void {
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index !== -1) {
    contacts[index].name = updateName;
    contacts[index].phone = updatePhone;
    contacts[index].isEditing = false;
    render();
  }
}

function toggleEditMode(id: number): void {
  const contact = contacts.find((contact) => contact.id === id);
  if (contact) {
    contact.isEditing = !contact.isEditing;
    render();
  }
}

function render(): void {
  const contactList = document.getElementById("contact-list");
  if (contactList) {
    contactList.innerHTML = contacts
      .map(
        (contact) => `
      <li>
        ${
          contact.isEditing
            ? `<input type="text" id="edit-name-${contact.id}" value="${contact.name}">
             <input type="text" id="edit-phone-${contact.id}" value="${contact.phone}">
             <button data-id="${contact.id}" class="save-button">Save</button>
             `
            : `<span>${contact.name} - ${contact.phone}</span>
            <button data-id="${contact.id}" class="edit-button">Edit</button>
            <button data-id="${contact.id}" class="delete-button">Delete</button>
            `
        }
      </li>
      `
      )
      .join("");
    addEventListener();
  }
}

function addEventListener(): void {
  const editButtons = document.querySelectorAll(".edit-button");
  const deleteButtons = document.querySelectorAll(".delete-button");
  const saveButtons = document.querySelectorAll(".save-button");

  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = Number((event.target as HTMLButtonElement).dataset.id);
      toggleEditMode(id);
    });
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = Number((event.target as HTMLButtonElement).dataset.id);
      deleteContact(id);
    });
  });

  saveButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = Number((event.target as HTMLButtonElement).dataset.id);
      const updateName = (
        document.getElementById(`edit-name-${id}`) as HTMLInputElement
      ).value;
      const updatePhone = (
        document.getElementById(`edit-phone-${id}`) as HTMLInputElement
      ).value;
      editContact(id, updateName, updatePhone);
    });
  });
}

addContact("John Doe", "123-456-7890");
addContact("Jane Doe", "098-765-4321");

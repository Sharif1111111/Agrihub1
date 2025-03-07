class Toast {
    constructor(message, type = 'success', duration = 3000) {
        this.message = message;
        this.type = type;
        this.duration = duration;
        this.id = Date.now().toString();
    }

    show() {
        const toast = document.createElement('div');
        toast.className = `fixed bottom-4 right-4 z-50 rounded-lg px-6 py-4 text-white shadow-lg flex items-center justify-between bg-opacity-90 
            ${
                this.type === "success"
                    ? "bg-green-500"
                    : this.type === "error"
                    ? "bg-red-500"
                    : this.type === "warning"
                    ? "bg-yellow-500"
                    : "bg-blue-500"
            }
        `;
        const icon = this.getIcon(this.type);
        toast.innerHTML = `
            <div class="flex items-center">
                ${icon}
                <span class="ml-3">${this.message}</span>
            </div>
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
           toast.remove(); 
        }, this.duration);
    }
    getIcon(type) {
        const icons = {
            success: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`,
            error: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`,
            warning: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
            info: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h1v-4h-1m0-4h1V7h-1m-6 9h1v-4H7m0-4h1V7H7m12 9h1v-4h-1m0-4h1V7h-1"></path></svg>`,
        };
        return icons[type] || icons.info;
    }
}

function isValidForm(formData) {
    return formData.get('name') && formData.get('email') && formData.get('message');
}

function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    if(!isValidForm(formData)) {
       const toast = new Toast("Invalid inpur, please provide currect information to procced.", "error"); 
        return toast.show();
    }
    
    new Toast(`Hello ${formData.get('name')}, your form has been submmited`).show();
    event.target.reset();
}


function main() {
    // Load header and footer
    loadComponents();
    // Toogle Hamburger 
    document.getElementById('menu-toggle').addEventListener('click', function () {
        const menu = document.getElementById('menu');
        if(menu != undefined) {
            menu.classList.toggle('hidden');
        }
    });

    document.getElementById('contact-form').addEventListener('submit', handleForm);
}

function loadComponents() {
    const headerTemplate = `
      <header>
        <nav class="bg-green-800 p-4 text-white sticky top-0 z-50">
            <div class="container mx-auto flex justify-between items-center">
              <a href="index.html" class="text-2xl font-bold">
        <img src="logo.svg" alt="Agrihub" />
        </a>

              <!-- Hamburger Menu (Mobile) -->
              <button id="menu-toggle" class="md:hidden focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>

              <!-- Navigation Links -->
              <ul id="menu" class="hidden md:flex md:space-x-6 bg-green-800 md:bg-transparent absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto flex-col md:flex-row p-4 md:p-0">
                <li><a href="index.html" class="block py-2 hover:text-green-300 md:hover:bg-transparent">Home</a></li>
                <li><a href="farming-guides.html" class="block py-2 hover:text-green-300 md:hover:bg-transparent">Farming Guides</a></li>
                <li><a href="crop-details.html" class="block py-2 hover:text-green-300 md:hover:bg-transparent">Crop Details</a></li>
                <li><a href="pest-control.html" class="block py-2 hover:text-green-300 md:hover:bg-transparent">Pest Control</a></li>
                <li><a href="contact.html" class="block py-2 hover:text-green-300 md:hover:bg-transparent">Contact</a></li>
              </ul>
            </div>
          </nav>
      </header>
    `;

    const footerTemplate = `
      <footer class="bg-green-800 text-white py-12">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4">About AgriHub</h3>
              <p class="text-gray-300">
                AgriHub is your trusted source for farming knowledge, crop details, and pest control strategies.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-4">Quick Links</h3>
              <ul class="space-y-2">
                <li><a href="index.html" class="text-gray-300 hover:text-green-300">Home</a></li>
                <li><a href="farming-guides.html" class="text-gray-300 hover:text-green-300">Farming Guides</a></li>
                <li><a href="crop-details.html" class="text-gray-300 hover:text-green-300">Crop Details</a></li>
                <li><a href="pest-control.html" class="text-gray-300 hover:text-green-300">Pest Control</a></li>
                <li><a href="contact.html" class="text-gray-300 hover:text-green-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-4">Contact Us</h3>
              <ul class="text-gray-300 space-y-2">
                <li>Mirpur-10, Dhaka, Bangladesh</li>
                <li>+8801xx023xx</li>
                <li>info@agrihub.com</li>
              </ul>
            </div>
          </div>
          <div class="border-t border-green-700 mt-8 pt-8 text-center">
            <p>&copy; 2025 Agricultural Information Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerTemplate);
    document.body.insertAdjacentHTML('beforeend', footerTemplate);
}


document.addEventListener('DOMContentLoaded', main);

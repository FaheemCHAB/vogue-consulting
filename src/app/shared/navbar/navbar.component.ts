import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav
      class="navbar-background flex items-center justify-between px-6 sm:px-12 lg:px-24 h-[120px]"
    >
      <div class="flex items-center space-x-4 sm:space-x-8">
        <!-- Logo -->
        <a routerLink="/">
          <img
            src="../../../assets/img/image-1.png"
            class="w-24 h-auto sm:w-36"
            alt="Flowbite Logo"
          />
        </a>
        <!-- Navigation Links -->
        <div
          class="hidden md:flex ml-4 sm:ml-10 space-x-4 sm:space-x-11 items-center text-base sm:text-lg lg:text-2xl"
        >
          <a routerLink="/services" class="text-white hover:text-[#b424ff]">
            Our Services
          </a>
          <a routerLink="/about-us" class="text-white hover:text-[#b424ff]">
            About Us
          </a>
          <a routerLink="/contact-us" class="text-white hover:text-[#b424ff]">
            Contact Us
          </a>
        </div>
      </div>
      <!-- Button -->
      <div class="hidden md:block">
        <button
          class="bg-black text-white px-6 py-2 sm:px-12 sm:py-3 rounded-4xl hover:bg-gray-800 text-base sm:text-2xl cursor-pointer"
        >
          Get Your Free Audit
        </button>
      </div>
      <!-- Hamburger Menu for Mobile -->
      <div class="block md:hidden">
        <button
          class="text-white text-3xl focus:outline-none"
          (click)="toggleMobileMenu()"
        >
          &#9776;
        </button>
      </div>
    </nav>
    <!-- Mobile Menu -->
    <div
      *ngIf="isMobileMenuOpen"
      class="absolute top-[120px] left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 md:hidden"
    >
      <a routerLink="/services" class="hover:text-[#b424ff]">Our Services</a>
      <a routerLink="/about-us" class="hover:text-[#b424ff]">About Us</a>
      <a routerLink="/contact-us" class="hover:text-[#b424ff]">Contact Us</a>
      <button
        class="bg-white text-black px-6 py-2 rounded-4xl hover:bg-gray-200 text-base"
      >
        Get Your Free Audit
      </button>
    </div>
  `,
  styles: [
    `
      .navbar-background {
        background-image: linear-gradient(
          95deg,
          #fff 0%,
          #000 0%,
          #570471 75%,
          #00058d 110%
        );
      }
    `,
  ],
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}

// Velaro Static Site JavaScript
// Handles pricing toggle, FAQ accordions, mobile menu, and smooth scrolling

document.addEventListener('DOMContentLoaded', function() {
  // Pricing Constants
  const BASIC_MONTHLY = 59.95;
  const PLUS_MONTHLY = 89.95;
  const ANNUAL_DISCOUNT = 0.15; // 15% discount
  
  // Calculate annual prices (monthly * 12 * 0.85)
  const BASIC_ANNUAL = BASIC_MONTHLY * 12 * (1 - ANNUAL_DISCOUNT);
  const PLUS_ANNUAL = PLUS_MONTHLY * 12 * (1 - ANNUAL_DISCOUNT);
  
  // Pricing toggle functionality
  let isAnnual = false;
  const billingToggle = document.getElementById('billing-toggle');
  const toggleSlider = document.getElementById('toggle-slider');
  const monthlyLabel = document.getElementById('monthly-label');
  const annualLabel = document.getElementById('annual-label');
  
  // Price elements
  const basicPrice = document.getElementById('basic-price');
  const plusPrice = document.getElementById('plus-price');
  const basicPeriod = document.getElementById('basic-period');
  const plusPeriod = document.getElementById('plus-period');
  const basicSavings = document.getElementById('basic-savings');
  const plusSavings = document.getElementById('plus-savings');
  
  // Update pricing display
  function updatePricing() {
    if (isAnnual) {
      // Annual pricing
      basicPrice.textContent = '$' + BASIC_ANNUAL.toFixed(2);
      plusPrice.textContent = '$' + PLUS_ANNUAL.toFixed(2);
      basicPeriod.textContent = '/year';
      plusPeriod.textContent = '/year';
      
      // Show savings
      const basicSavingsAmount = (BASIC_MONTHLY * 12) - BASIC_ANNUAL;
      const plusSavingsAmount = (PLUS_MONTHLY * 12) - PLUS_ANNUAL;
      
      basicSavings.textContent = 'Save $' + basicSavingsAmount.toFixed(2) + ' annually';
      plusSavings.textContent = 'Save $' + plusSavingsAmount.toFixed(2) + ' annually';
      
      basicSavings.classList.remove('hidden');
      plusSavings.classList.remove('hidden');
      
      // Update toggle appearance
      billingToggle.classList.add('pricing-toggle');
      billingToggle.classList.remove('pricing-toggle-inactive');
      toggleSlider.classList.remove('translate-x-1');
      toggleSlider.classList.add('translate-x-6');
      
      // Update label styling
      monthlyLabel.classList.add('text-gray-500');
      monthlyLabel.classList.remove('text-gray-900');
      annualLabel.classList.add('text-gray-900');
      annualLabel.classList.remove('text-gray-500');
      
    } else {
      // Monthly pricing
      basicPrice.textContent = '$' + BASIC_MONTHLY.toFixed(2);
      plusPrice.textContent = '$' + PLUS_MONTHLY.toFixed(2);
      basicPeriod.textContent = '/month';
      plusPeriod.textContent = '/month';
      
      // Hide savings
      basicSavings.classList.add('hidden');
      plusSavings.classList.add('hidden');
      
      // Update toggle appearance
      billingToggle.classList.remove('pricing-toggle');
      billingToggle.classList.add('pricing-toggle-inactive');
      toggleSlider.classList.add('translate-x-1');
      toggleSlider.classList.remove('translate-x-6');
      
      // Update label styling
      monthlyLabel.classList.add('text-gray-900');
      monthlyLabel.classList.remove('text-gray-500');
      annualLabel.classList.add('text-gray-500');
      annualLabel.classList.remove('text-gray-900');
    }
  }
  
  // Pricing toggle event listener
  if (billingToggle) {
    billingToggle.addEventListener('click', function() {
      isAnnual = !isAnnual;
      updatePricing();
    });
  }
  
  // FAQ Accordion functionality
  const faqToggles = document.querySelectorAll('.faq-toggle');
  
  faqToggles.forEach(function(toggle) {
    // Initialize aria-expanded
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', toggle.getAttribute('data-target'));
    
    toggle.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const content = document.getElementById(targetId);
      const chevron = this.querySelector('.faq-chevron');
      
      if (content && chevron) {
        // Toggle content visibility
        content.classList.toggle('hidden');
        
        // Rotate chevron
        chevron.classList.toggle('rotate-180');
        
        // Update aria-expanded for accessibility
        const isExpanded = !content.classList.contains('hidden');
        this.setAttribute('aria-expanded', isExpanded.toString());
      }
    });
  });
  
  // Mobile menu functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (mobileMenuButton && mobileMenu) {
    // Initialize mobile menu accessibility
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    mobileMenuButton.setAttribute('aria-controls', 'mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
      // Toggle mobile menu visibility
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      
      // Update aria-expanded
      this.setAttribute('aria-expanded', (!isOpen).toString());
      
      // Toggle icons
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }
  
  // Smooth scrolling for anchor links (enhanced for better UX)
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
        
        // Smooth scroll to target
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL hash
        history.replaceState(null, null, '#' + targetId);
      }
    });
  });
  
  // Initialize pricing display
  updatePricing();
  
  // Add fade-in animation trigger when page loads
  const fadeInElements = document.querySelectorAll('.fade-in');
  fadeInElements.forEach(function(element) {
    element.style.opacity = '1';
  });
  
  // Handle initial URL hash if present
  if (window.location.hash) {
    setTimeout(function() {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }
});
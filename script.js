document.addEventListener('DOMContentLoaded', () => {
  // References
  const loadingScreen = document.getElementById('loadingScreen');
  const mainContent = document.getElementById('mainContent');
  const progressBar = document.getElementById('progressBar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
  const checkEligibilityForm = document.getElementById('checkEligibilityForm');
  const walletAddressInput = document.getElementById('walletAddress');
  const checkEligibilityBtn = document.getElementById('checkEligibilityBtn');
  const toastContainer = document.getElementById('toastContainer');
  const mobileLinkElements = document.querySelectorAll('.mobile-nav-link');
  const eligibilityModal = document.getElementById('eligibilityModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const closeModal = document.getElementById('closeModal');
  const claimTokensBtn = document.getElementById('claimTokensBtn');
  const tokenAmount = document.getElementById('tokenAmount');

  // Loading screen simulation
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 10;
    if (progress > 100) progress = 100;
    
    progressBar.style.width = `${progress}%`;
    
    if (progress === 100) {
      clearInterval(interval);
      
      // Add a slight delay before hiding the loading screen
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease-out';
        
        setTimeout(() => {
          loadingScreen.style.display = 'none';
          mainContent.classList.remove('hidden');
          mainContent.style.opacity = '0';
          mainContent.style.opacity = '1';
          mainContent.style.transition = 'opacity 0.5s ease-out';
        }, 500);
      }, 800);
    }
  }, 400);

  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  mobileLinkElements.forEach(link => {
    link.addEventListener('click', () => {
      menuIcon.classList.remove('active');
      mobileNav.classList.remove('active');
    });
  });

  // Function to open modal
  function openModal() {
    eligibilityModal.style.display = 'block';
    modalOverlay.style.display = 'block';
    
    // Add animation classes
    setTimeout(() => {
      eligibilityModal.classList.add('show');
      modalOverlay.classList.add('show');
    }, 10);
  }

  // Function to close modal
  function closeModalFunc() {
    eligibilityModal.classList.remove('show');
    modalOverlay.classList.remove('show');
    
    setTimeout(() => {
      eligibilityModal.style.display = 'none';
      modalOverlay.style.display = 'none';
    }, 300);
  }

  // Close modal when clicking the close button
  closeModal.addEventListener('click', closeModalFunc);
  
  // Close modal when clicking outside of it
  modalOverlay.addEventListener('click', closeModalFunc);

  // Function to check eligibility and show results
  function checkEligibility(walletAddress) {
    // Validate address format (simple check, should be enhanced in production)
    if (!walletAddress) {
      showToast('Please enter a wallet address', 'error');
      return false;
    }
    
    if (!walletAddress.startsWith('0x') || walletAddress.length !== 42) {
      showToast('Please enter a valid wallet address', 'error');
      return false;
    }
    
    // Show loading state
    checkEligibilityBtn.classList.add('loading');
    checkEligibilityBtn.disabled = true;
    
    // Simulate checking eligibility - in a real app, this would be an API call
    setTimeout(() => {
      // Hide loading state
      checkEligibilityBtn.classList.remove('loading');
      checkEligibilityBtn.disabled = false;
      
      // Set token amount (could be dynamic based on API response)
      tokenAmount.textContent = '12,965 TAKO';
      
      // Show results in modal
      openModal();
      
      showToast('Successfully checked eligibility', 'success');
    }, 1500);
    
    return true;
  }

  // Check eligibility on input change when enter is pressed
  walletAddressInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const walletAddress = walletAddressInput.value.trim();
      checkEligibility(walletAddress);
    }
  });

  // Check eligibility on button click
  checkEligibilityBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const walletAddress = walletAddressInput.value.trim();
    checkEligibility(walletAddress);
  });

  // Claim tokens button functionality
  claimTokensBtn.addEventListener('click', () => {
    showToast('Tokens claimed successfully!', 'success');
    closeModalFunc(); // Close modal after claiming
  });

  // Toast notification function
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const iconSvg = type === 'success' 
      ? '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="toast-icon" style="color: #10B981;"><circle cx="12" cy="12" r="10"></circle><path d="M8 12l2 2 6-6"></path></svg>'
      : '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="toast-icon" style="color: #EF4444;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';
    
    toast.innerHTML = `
      ${iconSvg}
      <div class="toast-content">${message}</div>
      <button class="toast-close">&times;</button>
    `;
    
    toastContainer.appendChild(toast);
    
    // Add close functionality
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      toast.style.opacity = '0';
      setTimeout(() => {
        toast.remove();
      }, 300);
    });
    
    // Auto dismiss after 5 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
      
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 5000);
  }
});

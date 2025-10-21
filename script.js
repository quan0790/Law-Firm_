 // Toggle mobile menu
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });

  // Dynamic year
  document.getElementById('year').textContent = new Date().getFullYear();
  // Hamburger Toggle
  document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });

  // Dynamic Year
  document.getElementById('year').textContent = new Date().getFullYear();
   tailwind.config = {
      theme: {
        extend: {
          colors: {
            navy: {
              50: '#f0f7eb',
              100: '#e1f5e1',
              300: '#81c784',
              500: '#4caf50',
              700: '#064e3b',
              900: '#0b1e3b',
            },
            gold: {
              300: '#ffd54f',
              500: '#ffc107',
              700: '#ffa000',
            }
          },
          fontFamily: {
            heading: ['Playfair Display', 'serif'],
            body: ['Poppins', 'sans-serif'],
          },
          animation: {
            'float': 'float 6s ease-in-out infinite',
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'fade-in': 'fadeIn 1s ease-out forwards',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-12px)' },
            },
            fadeIn: {
              '0%': { opacity: '0', transform: 'translateY(10px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            }
          }
        }
      }
    }
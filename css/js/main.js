console.log("André Morais Advocacia");
// Observe para a seção de conquistas existente
      const conquistasSec = document.getElementById('conquistas');
      if (conquistasSec) {
          observer.observe(conquistasSec);
      }

      // === NOVO: Observer para a Seção de Estatísticas (Animação Fade + Contagem) ===
      const statsSection = document.querySelector('.stats-banner-section');
      
      if (statsSection) {
          const statsObserver = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      // Dispara as animações de Fade In no CSS
                      statsSection.classList.add('animated');

                      // Anima os números +10 e 100%
                      const counters = statsSection.querySelectorAll('.counter');
                      counters.forEach(counter => {
                          const target = +counter.getAttribute('data-target');
                          let count = 0;
                          const speed = 60; // velocidade da contagem
                          const increment = target / speed;

                          const updateCount = () => {
                              count += increment;
                              if (count < target) {
                                  counter.innerText = Math.ceil(count);
                                  setTimeout(updateCount, 25);
                              } else {
                                  counter.innerText = target;
                              }
                          };

                          setTimeout(updateCount, 300); // pequeno delay em relação ao fade
                      });

                      statsObserver.disconnect(); // Executa a animação apenas 1 vez
                  }
              });
          }, { threshold: 0.3 });

          statsObserver.observe(statsSection);
      }
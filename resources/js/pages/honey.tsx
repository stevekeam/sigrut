import { useState, useEffect } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';
import { dashboard, login, register } from '@/routes';

// Define product type
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

// Define cart item type
interface CartItem {
  product: Product;
  quantity: number;
}

export default function HoneyProducts() {
  const { auth } = usePage<SharedData>().props;
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartVisible, setCartVisible] = useState(false);

  // Honey product data
  const honeyProducts: Product[] = [
    {
      id: 1,
      name: 'Raw Honey',
      price: 500,
      image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-31-at-10.33.50_bc8b9276-e1738586951867.jpg',
      description: 'Unprocessed and pure, packed with natural enzymes and nutrients.',
      category: 'Pure Honey'
    },
    {
      id: 2,
      name: 'Honeycomb',
      price: 800,
      image: 'https://sigrutfarmsinternational.com/wp-content/uploads/2025/01/honeycomb.jpg',
      description: 'Enjoy honey the way bees made it — fresh, chewy, and full of flavor.',
      category: 'Honeycomb'
    },
    {
      id: 3,
      name: 'Infused Honey',
      price: 650,
      image: 'https://sigrutfarmsinternational.com/wp-content/uploads/2025/01/infused-honey.jpg',
      description: 'Honey blended with natural herbs and spices for added benefits.',
      category: 'Infused Honey'
    },
    {
      id: 4,
      name: 'Premium Wild Honey',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Rare wild honey harvested from natural forests, rich in unique flavors.',
      category: 'Pure Honey'
    },
    {
      id: 5,
      name: 'Bee Pollen',
      price: 950,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Nutrient-rich bee pollen collected from our hives, perfect for supplements.',
      category: 'Bee Products'
    },
    {
      id: 6,
      name: 'Propolis Extract',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Natural bee propolis with antimicrobial properties for immune support.',
      category: 'Bee Products'
    }
  ];

  // Add to cart function
  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  // Remove from cart function
  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  // Update quantity function
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
   
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Calculate total items in cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  // FAQ toggle functionality
  const toggleFAQ = (index: number) => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems[index].classList.toggle('active');
  };

  // Add staggered animation delays on component mount
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
      (element as HTMLElement).style.animationDelay = (index * 0.2) + 's';
    });
  }, []);

  return (
    <>
      <Head title="Pure Natural Honey - Sigrut Farms">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="min-h-screen bg-white text-[#333] font-sans" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {/* Navigation Header */}
        <header className="w-full text-sm py-4 px-6 bg-white shadow-sm sticky top-0 z-50">
          <nav className="flex items-center justify-end gap-4 max-w-7xl mx-auto">
            {auth.user ? (
              <Link
                href={dashboard()}
                className="inline-block rounded-sm border border-[#3a593535] px-5 py-1.5 text-sm leading-normal text-[#2c3e2c] hover:border-[#4a6b4a]"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href={login()}
                  className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#2c3e2c] hover:border-[#3a593535]"
                >
                  Log in
                </Link>
                <Link
                  href={register()}
                  className="inline-block rounded-sm border border-[#3a593535] px-5 py-1.5 text-sm leading-normal text-[#2c3e2c] hover:border-[#4a6b4a]"
                >
                  Register
                </Link>
              </>
            )}
            
            {/* Cart Button */}
            <button
              className="relative p-2"
              onClick={() => setCartVisible(!cartVisible)}
            >
              <span className="text-xl">🛒</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </nav>
        </header>

        {/* Shopping Cart Sidebar */}
        {cartVisible && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                onClick={() => setCartVisible(false)}
              ></div>
             
              <div className="fixed inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                        <button
                          type="button"
                          className="-mr-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setCartVisible(false)}
                        >
                          ✕
                        </button>
                      </div>

                      <div className="mt-8">
                        {cart.length === 0 ? (
                          <p className="text-center text-gray-500">Your cart is empty</p>
                        ) : (
                          <div className="flow-root">
                            <ul className="-my-6 divide-y divide-gray-200">
                              {cart.map((item) => (
                                <li key={item.product.id} className="py-6 flex">
                                  <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                    <img
                                      src={item.product.image}
                                      alt={item.product.name}
                                      className="w-full h-full object-center object-cover"
                                    />
                                  </div>

                                  <div className="ml-4 flex-1 flex flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{item.product.name}</h3>
                                        <p className="ml-4">KSh {(item.product.price * item.quantity).toFixed(2)}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        KSh {item.product.price.toFixed(2)} each
                                      </p>
                                    </div>
                                    <div className="flex-1 flex items-end justify-between text-sm">
                                      <div className="flex items-center border rounded-md">
                                        <button
                                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                          className="px-2 py-1 text-gray-600"
                                        >
                                          -
                                        </button>
                                        <span className="px-2 py-1">{item.quantity}</span>
                                        <button
                                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                          className="px-2 py-1 text-gray-600"
                                        >
                                          +
                                        </button>
                                      </div>

                                      <button
                                        type="button"
                                        onClick={() => removeFromCart(item.product.id)}
                                        className="font-medium text-red-600 hover:text-red-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>KSh {totalPrice.toFixed(2)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <button
                          className="w-full bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700"
                        >
                          Checkout
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="text-green-600 font-medium hover:text-green-500"
                            onClick={() => setCartVisible(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* HERO */}
        <section className="honey-hero fade-in">
          <div className="hero-content">
            <h1>Pure Natural Honey</h1>
            <p>From hive to jar — taste the goodness of nature.</p>
            <a href="#products" className="btn-primary">Explore Products</a>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="products fade-in">
          <h2>Our Honey Products</h2>
          <p>Crafted with care, straight from our bees to your home.</p>
          <div className="product-grid">
            {honeyProducts.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">From KSh {product.price}</p>
                <p>{product.description}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="benefits fade-in">
          <h2>Health Benefits of Our Honey</h2>
          <div className="benefits-grid">
            <div className="benefit-item"><span className="benefit-icon">🌿</span><h3>Rich in Antioxidants</h3><p>Protects cells and promotes overall health.</p></div>
            <div className="benefit-item"><span className="benefit-icon">💪</span><h3>Boosts Immunity</h3><p>Helps your body fight infections naturally.</p></div>
            <div className="benefit-item"><span className="benefit-icon">⚡</span><h3>Natural Energy Source</h3><p>Quick and sustainable energy boost.</p></div>
            <div className="benefit-item"><span className="benefit-icon">🗣️</span><h3>Soothes Throats</h3><p>Calms sore throats and reduces coughing.</p></div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process fade-in">
          <h2>From Hive to Jar</h2>
          <p>We keep our honey 100% natural, harvested sustainably and bottled with care.</p>
          <img src="https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/Screenshot-2025-01-08-100421-1-e1736498226999.png" alt="Honey Processing" />
        </section>

        {/* KNOWLEDGE CORNER */}
        <section className="knowledge fade-in">
          <h2>Honey Knowledge Corner 🍯</h2>
          <div className="knowledge-grid">
            <div className="knowledge-item">Did you know? Honey never spoils if stored properly.</div>
            <div className="knowledge-item">Raw honey contains enzymes that aid digestion.</div>
            <div className="knowledge-item">Bees visit about 2 million flowers to make 1 pound of honey.</div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials fade-in">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial"><div className="stars">⭐⭐⭐⭐⭐</div>"Best honey I've ever tasted! Pure and delicious."<strong>Mary N.</strong></div>
            <div className="testimonial"><div className="stars">⭐⭐⭐⭐⭐</div>"Delivery was quick, and the honeycomb was so fresh."<strong>James K.</strong></div>
            <div className="testimonial"><div className="stars">⭐⭐⭐⭐</div>"I use infused honey in my tea every morning — amazing!"<strong>Grace W.</strong></div>
          </div>
        </section>

        {/* TRUST */}
        <section className="trust fade-in">
          <h2>Why Choose Us</h2>
          <div className="trust-icons">
            <div>✅ 100% Natural</div>
            <div>🌍 Sustainably Harvested</div>
            <div>🐝 Direct from Farm</div>
          </div>
        </section>

        {/* SPECIAL OFFERS */}
        <section className="offers fade-in">
          <h2>Special Offers 🎉</h2>
          <div className="offer-box">Buy 2kg of honey today and enjoy <strong>FREE delivery</strong> across Nairobi!</div>
        </section>

        {/* FAQ */}
        <section className="faq fade-in">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3 onClick={() => toggleFAQ(0)}>Do you deliver countrywide?</h3>
            <p>Yes, we deliver honey across Kenya. Delivery fees may apply depending on location.</p>
          </div>
          <div className="faq-item">
            <h3 onClick={() => toggleFAQ(1)}>How is the honey packaged?</h3>
            <p>Our honey is packaged in sealed, food-safe jars to maintain freshness.</p>
          </div>
          <div className="faq-item">
            <h3 onClick={() => toggleFAQ(2)}>Can I buy in bulk?</h3>
            <p>Yes! We offer bulk purchase options for hotels, shops, and wholesalers. Contact us directly for special rates.</p>
          </div>
          <div className="faq-item">
            <h3 onClick={() => toggleFAQ(3)}>How long does honey last?</h3>
            <p>Properly stored honey can last indefinitely. It may crystallize, but that's natural — just warm it gently to return it to liquid.</p>
          </div>
        </section>

        {/* CTA */}
        <section id="order" className="cta fade-in">
          <h2>Order Your Honey Today</h2>
          <p>Experience the natural sweetness of Sigrut Honey — delivered fresh to you.</p>
          <a href="https://wa.me/254743200200" className="btn-primary">WhatsApp to Order</a>
          <a href="tel:+254743200200" className="btn-secondary">Call Us</a>
          <a href="mailto:info@sigrutfarmsinternational.com?subject=Honey%20Order%20Inquiry&body=Hello%20Sigrut%2C%0D%0A%0D%0AI%20would%20like%20to%20order%20honey.%20Here%20are%20my%20details:%0D%0A%0D%0AName%3A%20%0D%0APhone%3A%20%0D%0AQuantity%20(kg)%3A%20%0D%0ADelivery%20Location%3A%20%0D%0A" className="btn-secondary">Email Us</a>
        </section>

        {/* Floating Order Button */}
        <a href="#order" className="floating-order">Order Now!</a>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Sigrut Farms</h3>
                <p className="text-gray-400">
                  Bringing pure, natural honey to your table with sustainable beekeeping practices.
                </p>
              </div>
             
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                  <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
             
              <div>
                <h4 className="font-semibold mb-4">Contact Us</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <span className="mr-2">📍</span>
                    <span>Nairobi, Kenya</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📞</span>
                    <span>+254 743 200 200</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✉️</span>
                    <span>info@sigrutfarms.com</span>
                  </li>
                </ul>
              </div>
             
              <div>
                <h4 className="font-semibold mb-4">Business Hours</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Monday-Friday: 8am-6pm</li>
                  <li>Saturday: 9am-4pm</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
           
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Sigrut Farms International. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <style>{`
          /* General Styles */
          body {
            font-family: 'Poppins', sans-serif;
            font-size: 18px;
            line-height: 1.7;
            margin: 0;
            color: #333;
            background: #fff;
          }

          /* Fade-in animation */
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 1s ease forwards;
          }
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Hero Section */
          .honey-hero {
            position: relative;
            background: url('https://Sigrutfarmsinternational.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-31-at-10.34.09_c58dd137.jpg') center/cover no-repeat;
            color: white;
            text-align: center;
            padding: 160px 20px;
          }
          .honey-hero::before {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.55);
          }
          .honey-hero .hero-content {
            position: relative;
            z-index: 2;
            background: rgba(0,0,0,0.4);
            padding: 40px;
            border-radius: 16px;
            display: inline-block;
            max-width: 700px;
          }
          .honey-hero h1 {
            font-size: 4rem;
            margin-bottom: 20px;
            color: #ffffff;
            text-shadow: 2px 2px 6px rgba(0,0,0,0.8);
          }
          .honey-hero p {
            font-size: 1.5rem;
            color: #ffffff;
          }

          /* Buttons */
          .btn-primary, .btn-secondary {
            display: inline-block;
            padding: 14px 30px;
            margin-top: 20px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: 0.3s;
            cursor: pointer;
            border: none;
          }
          .btn-primary { background: #d97706; color: #fff; box-shadow: 0 3px 8px rgba(0,0,0,0.2);}
          .btn-primary:hover { background: #b45309; transform: translateY(-2px);}
          .btn-secondary { background: #fef3c7; color: #92400e;}
          .btn-secondary:hover { background: #fde68a; transform: translateY(-2px);}

          /* Products */
          .products { padding: 80px 20px; text-align: center;}
          .products h2 { font-size: 2.6rem; margin-bottom: 15px; color: #92400e;}
          .products p { margin-bottom: 40px; color: #444;}
          .product-grid {
            display: flex;
            gap: 25px;
            justify-content: center;
            flex-wrap: wrap;
          }
          .product-card {
            background: #fff;
            border-radius: 14px;
            padding: 25px;
            text-align: center;
            max-width: 280px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 18px rgba(0,0,0,0.15);
          }
          .product-card img {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 15px;
          }
          .product-card h3 { font-size: 1.6rem; color: #92400e; }
          .product-card .price { font-size: 1.3rem; color: #d97706; font-weight: bold; margin: 8px 0; }

          /* Benefits */
          .benefits {
            padding: 80px 20px;
            text-align: center;
            background: #fffbeb;
          }
          .benefits h2 { font-size: 2.6rem; margin-bottom: 20px; color: #92400e;}
          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 25px;
            margin-top: 30px;
          }
          .benefit-item {
            background: #fff;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            text-align: left;
          }
          .benefit-icon {
            font-size: 2rem;
            margin-bottom: 10px;
            display: block;
            color: #d97706;
          }
          .benefit-item h3 { font-size: 1.4rem; margin-bottom: 8px; color: #92400e; }

          /* Process Section */
          .process {
            padding: 80px 20px;
            text-align: center;
            background: #fff;
          }
          .process h2 { font-size: 2.6rem; margin-bottom: 15px; color: #92400e;}
          .process img {
            max-width: 800px;
            width: 100%;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            margin-top: 25px;
          }

          /* Knowledge Corner */
          .knowledge {
            padding: 80px 20px;
            background: #fefce8;
            text-align: center;
          }
          .knowledge h2 { font-size: 2.4rem; color: #92400e; margin-bottom: 20px;}
          .knowledge-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 25px;
          }
          .knowledge-item {
            background: #fff;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            font-size: 1.1rem;
            color: #555;
          }

          /* Testimonials */
          .testimonials {
            padding: 80px 20px;
            background: #fefce8;
            text-align: center;
          }
          .testimonials h2 { font-size: 2.6rem; color: #92400e; margin-bottom: 20px;}
          .testimonial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 25px;
            margin-top: 30px;
          }
          .testimonial {
            background: #fff;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            font-style: italic;
          }
          .stars { color: #fbbf24; font-size: 1.2rem; margin-bottom: 8px; }
          .testimonial strong { display: block; margin-top: 10px; color: #92400e; }

          /* Trust Badges */
          .trust {
            padding: 60px 20px;
            text-align: center;
            background: #fff;
          }
          .trust h2 { font-size: 2.2rem; color: #92400e; margin-bottom: 20px;}
          .trust-icons {
            display: flex;
            gap: 30px;
            justify-content: center;
            flex-wrap: wrap;
          }
          .trust-icons div {
            font-size: 1.2rem;
            background: #fef3c7;
            padding: 15px 25px;
            border-radius: 12px;
            color: #92400e;
            font-weight: 600;
          }

          /* Special Offers */
          .offers {
            padding: 80px 20px;
            text-align: center;
            background: #fffbeb;
          }
          .offers h2 { font-size: 2.4rem; color: #92400e; margin-bottom: 20px;}
          .offer-box {
            background: #fff7ed;
            border: 2px dashed #d97706;
            padding: 30px;
            border-radius: 12px;
            font-size: 1.3rem;
            font-weight: 600;
            color: #92400e;
          }

          /* FAQ Accordion */
          .faq {
            padding: 80px 20px;
            background: #fff;
          }
          .faq h2 { font-size: 2.6rem; color: #92400e; text-align: center; margin-bottom: 30px;}
          .faq-item {
            max-width: 800px;
            margin: 15px auto;
            background: #fff;
            border: 1px solid #fcd34d;
            border-radius: 10px;
            overflow: hidden;
          }
          .faq-item h3 {
            margin: 0;
            padding: 15px;
            font-size: 1.2rem;
            background: #fef3c7;
            color: #92400e;
            cursor: pointer;
          }
          .faq-item p {
            padding: 15px;
            display: none;
          }
          .faq-item.active p { display: block; }

          /* CTA */
          .cta {
            padding: 80px 20px;
            text-align: center;
            background: #fef3c7;
          }
          .cta h2 { font-size: 2.6rem; margin-bottom: 15px; color: #92400e;}
          .cta p { margin-bottom: 25px; color: #444; font-size: 1.2rem; }

          /* Floating Order Button */
          .floating-order {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #d97706;
            color: white;
            padding: 14px 22px;
            border-radius: 50px;
            font-weight: bold;
            text-decoration: none;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            transition: 0.3s;
            z-index: 999;
          }
          .floating-order:hover { background: #b45309; transform: scale(1.05);}
        `}</style>
      </div>
    </>
  );
}

import React from 'react';
import { useEffect, useState } from 'react';
import { Menu, X, Search, UserRound, ShoppingCart, MapPin } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [zipOpen, setZipOpen] = useState(false);
  const [zip, setZip] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <button className="icon-button mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    <nav className={`header-nav header-left ${menuOpen ? 'nav-open' : ''}`}>
      <a href="#bestsellers" onClick={closeMenu}>Furniture</a>
      <a href="#why-feather" onClick={closeMenu}>Why Feather</a>
      <a href="#business" onClick={closeMenu}>Feather for Business</a>
    </nav>
    <a className="wordmark" href="#home" onClick={closeMenu}>feather</a>
    <nav className="header-nav header-right">
      <button className="nav-text delivery-link" onClick={() => {setZipOpen(true); setMessage('');}}><MapPin size={15}/> Check if We Deliver</button>
      <button className="nav-text" onClick={() => setSearchOpen(!searchOpen)}><Search size={15}/> Search</button>
      <a href="#footer"><UserRound size={16} className="nav-icon"/> <span>Account</span></a>
      <a href="#bestsellers" aria-label="Shopping cart" className="cart-link"><ShoppingCart size={20}/></a>
    </nav>
    {searchOpen && <form className="search-panel" onSubmit={e => {e.preventDefault(); document.querySelector('#bestsellers')?.scrollIntoView({behavior:'smooth'}); setSearchOpen(false);}}>
      <Search size={18}/><input autoFocus placeholder="Search furniture..." aria-label="Search furniture"/><button type="submit">Search</button><button type="button" className="plain-close" onClick={() => setSearchOpen(false)}><X size={18}/></button>
    </form>}
    {zipOpen && <div className="modal-backdrop" onClick={() => setZipOpen(false)}><form className="zip-modal" onClick={e => e.stopPropagation()} onSubmit={e => {e.preventDefault(); setMessage(zip.trim().length >= 5 ? `Thanks! Delivery availability for ${zip} can be confirmed with our team.` : 'Please enter a valid ZIP code.');}}>
      <button type="button" className="modal-close" onClick={() => setZipOpen(false)} aria-label="Close"><X/></button><span className="eyebrow">DELIVERY CHECK</span><h2>Is Feather available in your area?</h2><p>Enter your ZIP code to check delivery availability.</p><input value={zip} onChange={e => setZip(e.target.value)} placeholder="ZIP code" inputMode="numeric" maxLength={10}/><button className="pill-button" type="submit">Check availability</button>{message && <p className="form-message">{message}</p>}
    </form></div>}
  </header>;
}
export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-zinc-900">
        <div>
          <h3 className="text-zinc-900 font-semibold mb-2">Digital Sewa</h3>
          <p className="leading-relaxed">We build web and mobile solutions that accelerate your business growth.</p>
        </div>
        <div>
          <h4 className="text-zinc-900 font-medium mb-2">Contact</h4>
          <ul className="space-y-1">
            <li>Email: <a href="mailto:hello@digitalsewa.com" className="underline">hello@digitalsewa.com</a></li>
            <li>Phone: <a href="tel:+977-9800000000" className="underline">+977-9800000000</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-zinc-900 font-medium mb-2">Follow</h4>
          <ul className="space-y-1">
            <li><a className="underline" href="#">LinkedIn</a></li>
            <li><a className="underline" href="#">Twitter/X</a></li>
            <li><a className="underline" href="#">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-8 text-xs text-zinc-900">© {new Date().getFullYear()} Digital Sewa. All rights reserved.</div>
    </footer>
  );
}

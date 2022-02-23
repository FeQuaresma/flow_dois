function CardButton({ children }: { children: JSX.Element[] }) {
  return (
    <div>
      <a className="flex h-8 text-black items-center justify-center rounded bg-yellow-500 hover:bg-yellow-600 transition-all gap-2 font-medium" href="/">
        {children}
      </a>
    </div>
  );
}

export default CardButton;

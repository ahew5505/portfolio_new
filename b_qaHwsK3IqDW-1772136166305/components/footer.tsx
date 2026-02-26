export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-2 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          {"Designed & Built by Andrew Hewitt"}
        </p>
        <p className="font-mono text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

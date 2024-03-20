import Router from 'next/router';

interface RedirectOptions {
  res?: any;
  status?: number | null;
}

export default function redirectTo(
  destination: string,
  { res = null, status = null }: RedirectOptions = {}
  ): void {
  if (res) {
    res.writeHead(status || 302, { Location: destination });
    res.end();
  } else {
    if (destination[0] === '/' && destination[1] !== '/') {
      // Router.push(destination);
      window.location.href = destination;
    } else {
      window.location.href = destination;
    }
  }
};
import '../globals.css';
import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Root layouts must contain html and body tags.
    <html lang="en">
      <body>
        <PrimaryLayout justify='items-start'>
          {children}
        </PrimaryLayout>  
      </body>
    </html>
  );
}

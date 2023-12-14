import styles from './Footer.module.css';

export interface FooterProps extends React.ComponentPropsWithoutRef<'footer'> {
}

const Footer: React.FC<FooterProps> = ({className, ...footerProps}) => {
  return (
    <footer 
      className={`w-full p-5 bg-slate-100 text-slate-500 ${className}`}
      {...footerProps}
    >
      <p>Hooooongyu</p>
    </footer>
  );
}

export default Footer;
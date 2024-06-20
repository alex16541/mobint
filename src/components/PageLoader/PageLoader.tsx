import cls from './PageLoader.module.scss'
import classNames from "classnames"
import { AppImage } from "@/ui/AppImage";
import LogoImg from "@/assets/img/logo.png";

interface CompanyCardStyles {

}

export interface Company {
  companyId: string;
  title: string;
  logoUrl?: string;
  cashback?: string;
  level?: '0' | '1' | '2' | '3';
  styles?: CompanyCardStyles; 
} 

interface PageLoaderProps {
  className?: string;
}


export const PageLoader = (props: PageLoaderProps) => {
  const {className} = props;

  return (
    <div className={classNames(cls.PageLoader, {},[className])}>
      <AppImage className={cls.logo} src={LogoImg}/> 
    </div>
  )
}

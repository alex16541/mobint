import { Card } from "@/ui/Card"
import cls from './CompanyCard.module.scss'
import classNames from "classnames"
import { Button } from "@/ui/Button";
import { AppImage } from "@/ui/AppImage";
import { CSSProperties, useCallback } from "react";

export interface Company {
  company: { companyId: string };
  customerMarkParameters: {
    loyaltyLevel: {
      number: number,
      name: string,
      requiredSum: number,
      markToCash: number,
      cashToMark: number,
    },
    mark: number,
  },

  mobileAppDashboard: {
    companyName: string,
    logo: string,
    backgroundColor: string,
    mainColor: string,
    cardBackgroundColor: string,
    textColor: string,
    highlightTextColor: string,
    accentColor: string 
  }
}

interface CompanyCardProps {
  className?: string;
  data: Company;
  onMoreClick?: (companyId: string) => void;
  onDeleteClick?: (companyId: string) => void;
  onShowClick?: (companyId: string) => void;
}


export const CompanyCard = (props: CompanyCardProps) => {
  const { className, data: { mobileAppDashboard: style, ...data }, onMoreClick, onDeleteClick, onShowClick } = props;

  const onShowClickHandler = useCallback(
    () => {
      onShowClick?.(data.company.companyId);
    },
    [data.company.companyId, onShowClick],
  )

  const onDeleteClickHandler = useCallback(
    () => {
      onDeleteClick?.(data.company.companyId);
    },
    [data.company.companyId, onDeleteClick],
  )

  const onMoreClickHandler = useCallback(
    () => {
      onMoreClick?.(data.company.companyId);
    },
    [data.company.companyId, onMoreClick],
  )

  const highlightColor: CSSProperties = {
    'color': style?.highlightTextColor ?? 'var(--colorBlack)',
  }

  const textColor: CSSProperties = {
    'color': style?.textColor ?? 'var(--colorDarkGray)',
  }

  const showColor: CSSProperties = {
    'backgroundColor': style?.mainColor ?? 'var(--colorBlue)',
  }

  const accentColor: CSSProperties = {
    'backgroundColor': style?.accentColor ?? 'var(--colorRed)',
  }

  const buttonColors: CSSProperties = {
    'color': style?.mainColor ?? 'var(--colorWhite)',
    'backgroundColor': style?.backgroundColor ?? 'var(--colorBlue)',
  }

  const backgroundColor: CSSProperties = {
    'backgroundColor': style?.cardBackgroundColor ?? 'var(--colorWhite)',
  }

  return (
    <Card className={classNames(cls.CompanyCard, {}, [className])} style={backgroundColor}>
      <div className={cls.header}>
        <label className={cls.title} style={highlightColor}>{style.companyName}</label>
        {style.logo && <AppImage className={cls.logo} src={style.logo} />}
      </div>

      <div className={cls.content}>
        <div className={cls.points} style={highlightColor}>
          {data.customerMarkParameters.loyaltyLevel.requiredSum} <span style={textColor}>баллов</span>
        </div>
        <div className={cls.cashback} style={highlightColor}>
          <span style={textColor}>Кэшбэк</span> {data.customerMarkParameters.loyaltyLevel.cashToMark}%
        </div>
        <div className={cls.level} style={highlightColor}>
          <span style={textColor}>Уровень</span> {data.customerMarkParameters.loyaltyLevel.name}
        </div>
      </div>
      <div className={cls.actions}>
        <Button className={cls.show} style={showColor} onClick={onShowClickHandler} theme="clear" />
        <Button className={cls.delete} style={accentColor} onClick={onDeleteClickHandler} theme="clear" />
        <Button className={cls.more} style={buttonColors} onClick={onMoreClickHandler}>Подробнее</Button>
      </div>
    </Card>
  )
}

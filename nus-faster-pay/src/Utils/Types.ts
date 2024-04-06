export interface PaymentItem {
    title: string;
    description: string;
    price: number;
    quantity: number;
    deadline: string;
}

export interface Trial {
    paymentTitles: string[];
    description: string;
}

export type accessibilityOfPriceInfo = 'not shown' | 'shown';

export type PaymentCardSize = 'small' | 'medium' | 'large';

export type NavigationBarNaming = 'original' | 'new';

export interface IVConfig {
    accessibilityOfPriceInfo: accessibilityOfPriceInfo;
    paymentCardSize: PaymentCardSize;
    navigationBarNaming: NavigationBarNaming;
}

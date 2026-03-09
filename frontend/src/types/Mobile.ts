export interface Mobile {
  basePrice: number;
  brand: string;
  id: string;
  imageUrl: string;
  name: string;
}

export interface MobileInfo {
  id: string;
  brand: string;
  name: string;
  description: string;
  basePrice: number;
  rating: number;
  specs: MobileInfoSpecs;
  colorOptions: MobileInfoColorOption[];
  storageOptions: MobileInfoStorageOption[];
  similarProducts: Mobile[];
}

export interface MobileInfoSpecs {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
}

export interface MobileInfoColorOption {
  name: string;
  hexCode: string;
  imageUrl: string;
}

export interface MobileInfoStorageOption {
  capacity: string;
  price: number;
}

export interface MobileCart {
  name: string;
  color: string;
  capacity: string;
  price: number;
  imageUrl: string;
}
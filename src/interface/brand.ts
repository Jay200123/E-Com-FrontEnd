interface Brand {
  _id: string;
  brand_name: string;
}

interface BrandState {
  message: string;
  getAllBrands: () => Promise<Brand[]>;
  getBrandById: (id: string) => Promise<Brand>;
  addBrand: (formData: FormData) => Promise<void>;
  updateBrandById: (id: string, brand_name: string) => Promise<void>;
  deleteBrandById: (id: string) => Promise<void>;
}

export type { BrandState, Brand };

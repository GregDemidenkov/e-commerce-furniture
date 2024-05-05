'use client';

import { useEffect } from 'react';
import Select from 'react-select';

import { setSortParams } from '@/entities/product/model/slice';
import { getProducts } from '@/entities/product/model/actions';
import { useAppDispatch, useAppSelector } from '@/shared/utils/storeHooks';
import getCurrentOption from '../utils/getCurrentOption';
import { options } from '../model/sortOptions';

export const CatalogFilter = () => {
  const dispatch = useAppDispatch()
  const { sortParams } = useAppSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getProducts(sortParams))
  }, [sortParams])

  return (
    <Select
      defaultValue={options[0]}
      options={options}
      value={getCurrentOption(sortParams.sort || "default")}
      onChange={(selectedOption) => dispatch(setSortParams({...sortParams, sort: selectedOption?.value === 'default' ? undefined : selectedOption?.value}))}
    />
  );
}
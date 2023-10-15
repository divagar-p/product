import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../../component/LoadingSpinner';
import Page from '../../component/Page';
import ProductCard from '../../component/productList/ProductCard';
import SkeletonProductItem from '../../component/productList/SkeletonProductItem';
import { getCategories } from '../../redux/slice/category';
import { getCategoryWiseProduct, getProduct, getSearchProduct } from '../../redux/slice/product';
import { AppDispatch } from '../../redux/store';

interface productList {
    id: any;
    title?: string;
    description?: string;
    price?: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images?: string[];
    status?: any;
}

function ProductList() {
    const dispatch: AppDispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [productList, setProductList] = useState([]);
    const [categoryDropdownList, setCategoryDropdownList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const getProductData = useSelector((state: any) => state.product)
    const getCategoryData = useSelector((state: any) => state.category)

    useEffect(() => {
        dispatch(getProduct())
        dispatch(getCategories())
        setSelectedCategory('')
    }, [dispatch])


    useEffect(() => {
        if (getProductData?.product) {
            setProductList(getProductData?.product)
        }
        if (getProductData?.loading) {
            setLoading(getProductData?.loading)
        }
        else {
            setLoading(false)
        }
    }, [getProductData])

    useEffect(() => {
        if (getCategoryData?.categories) {
            setCategoryDropdownList(getCategoryData?.categories)
        }
    }, [getCategoryData])

    const handleChangeCategory = (value: string) => {
        setSelectedCategory(value)
        dispatch(getCategoryWiseProduct(value))
        setSearchValue('')
    }
    const handleSearch = (value: string) => {
        setSearchValue(value)
        dispatch(getSearchProduct(value))
        setSelectedCategory('')
    }
    return (
        <Page title='Product List'>
            {loading && <LoadingSpinner />}
            <Box
                sx={{
                    display: 'grid',
                    gap: 1,
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(2, 1fr)',
                    },
                    textAlign: 'center',
                    mb: 3
                }}
            >
                <TextField
                    size="small"
                    placeholder="Search product…"
                    value={searchValue ?? ''}
                    onChange={(e) => handleSearch(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <FormControl fullWidth size='small'>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Category"
                        name="Category"
                        value={selectedCategory ?? ""}
                        onChange={(e) => handleChangeCategory(e.target.value)}
                    >
                        {categoryDropdownList?.map((dat, index) =>
                            <MenuItem key={index} value={dat}>{dat}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </Box>
            {productList?.length !== 0 ?
                <Box
                    sx={{
                        display: 'grid',
                        gap: 3,
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(5, 1fr)',
                        },
                    }}
                >
                    {productList.map((product: productList, index: number) =>
                        product ? <ProductCard key={index} product={product} /> :
                            <SkeletonProductItem key={index} />
                    )}
                </Box> :
                <Typography variant="subtitle1" fontSize={'20px'} sx={{ textAlign: 'center' }}>No data found</Typography>
            }
        </Page>
    );
}

export default ProductList;
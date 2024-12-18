'use client';

import useLayoutStore from '@/stores/useLayoutStore';
import clsx from 'clsx';
import { ShoppingCart, X } from 'react-feather';
import Drawer from 'react-modern-drawer';

const Cart = () => {
    const isOpenCartDrawer = useLayoutStore(state => state.isOpenCartDrawer);
    const openCartDrawer = useLayoutStore(state => state.openCartDrawer);
    const closeCartDrawer = useLayoutStore(state => state.closeCartDrawer);

    return (
        <>
            <button
                onClick={openCartDrawer}
                type="button"
                data-ripple-dark="true"
                className="min-h-10 min-w-14 flex items-center justify-center rounded-lg ml-2.5 ripple px-3"
            >
                <ShoppingCart />
                <span className="ml-2.5">Giỏ hàng</span>
            </button>

            <Drawer
                open={isOpenCartDrawer}
                onClose={closeCartDrawer}
                direction="right"
                className="!w-drawer"
            >
                <div className="relative flex flex-col h-full">
                    <button
                        onClick={closeCartDrawer}
                        className="absolute top-4 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#bcbdbe]"
                    >
                        <X size={16} className="text-paper" />
                    </button>
                    <div className="px-5 text-xl font-semibold">
                        <div className="py-3.5 border-b border-solid border-[rgba(0,0,0,.12)]">
                            Giỏ hàng
                        </div>
                    </div>
                    <div className="flex-1 p-5">
                        <div className="flex items-center justify-center h-full text-base text-center">
                            Giỏ hàng đang trống. Vui lòng quay lại trang chủ để tiếp tục mua hàng.
                        </div>
                    </div>
                    <div className="p-5 flex items-center gap-[15px]">
                        <button className="border border-solid border-primary rounded-md h-10 px-4 text-sm text-primary ripple flex-1">
                            THÊM MÓN
                        </button>
                        <button
                            className={clsx(
                                'border border-solid rounded-md h-10 px-4 text-sm flex-1',
                                false && 'border-primary bg-primary text-white ripple-primary',
                                true &&
                                    'bg-[rgba(0,0,0,.12)] text-[rgba(0,0,0,.26)] select-none cursor-default'
                            )}
                        >
                            THANH TOÁN
                        </button>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default Cart;

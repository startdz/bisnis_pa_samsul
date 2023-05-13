import React from 'react'
import Hero from '/hero.jpg'

const Content = () => {

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${Hero})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Yoghurt Sehat</h1>
                    <p className="mb-5">Yoghurt pilihan dari hasil fermentasi terbaik. <br />Makan Yoghurt kamu setiap hari setelah makan, dan rasakan perubahannya 🖐</p>
                    <label htmlFor="my-modal-6" className="btn">Lihat Kejutan!</label>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle text-black">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Buruan Menangkan Kejutan dari Kami!</h3>
                            <p className="py-4">Kamu bisa mendapatkan + Discount 12% Setiap Pembelian Paket Kurma atau Yoghurt 😋</p>
                            <div className="modal-action">
                                <label htmlFor="my-modal-6" className="btn">Yay!</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
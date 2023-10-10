import React from 'react';
import { useForm } from '@inertiajs/react';

function PartnershipForm() {
    const { data, setData, post, processing, errors } = useForm({
        nama: '',
        instansi:'',
        jabatan:'',
        phone:'',
        email: '',
        deskripsi: '',
        why: '',
        other: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        post('/send-partnership-email');
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="nama">Nama</label>
            <input
            type="text"
            id="nama"
            value={data.nama}
            onChange={(e) => setData('nama', e.target.value)}
            />
            {errors.nama && <span className="text-red-500">{errors.nama}</span>}
        </div>

        <div>
            <label htmlFor="instansi">instansi</label>
            <input
            type="text"
            id="instansi"
            value={data.instansi}
            onChange={(e) => setData('instansi', e.target.value)}
            />
            {errors.instansi && <span className="text-red-500">{errors.instansi}</span>}
        </div>

        <div>
            <label htmlFor="jabatan">Jabatan</label>
            <input
            type="text"
            id="jabatan"
            value={data.jabatan}
            onChange={(e) => setData('jabatan', e.target.value)}
            />
            {errors.jabatan && <span className="text-red-500">{errors.jabatan}</span>}
        </div>

        <div>
            <label htmlFor="phone">No. Hp</label>
            <input
            type="tel"
            id="phone"
            value={data.phone}
            onChange={(e) => setData('phone', e.target.value)}
            />
            {errors.phone && <span className="text-red-500">{errors.phone}</span>}
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>

        <div>
            <label htmlFor="deskripsi">Deskripsi Singkat Tentang Kerjasama</label>
            <textarea
            id="deskripsi"
            value={data.deskripsi}
            onChange={(e) => setData('deskripsi', e.target.value)}
            />
            {errors.deskripsi && <span className="text-red-500">{errors.deskripsi}</span>}
        </div>

        <div>
            <label htmlFor="why">Kenapa TEDxUniversitasAirlangga Harus Berpartisipasi Dalam Acara Ini?</label>
            <textarea
            id="why"
            value={data.why}
            onChange={(e) => setData('why', e.target.value)}
            />
            {errors.why && <span className="text-red-500">{errors.why}</span>}
        </div>

        <div>
            <label htmlFor="other">Lain lain</label>
            <textarea
            id="other"
            value={data.other}
            onChange={(e) => setData('other', e.target.value)}
            />
            {errors.other && <span className="text-red-500">{errors.other}</span>}
        </div>

        <button type="submit" disabled={processing}>
            {processing ? 'Mengirim...' : 'Kirim'}
        </button>
        </form>
    );
}

export default PartnershipForm;

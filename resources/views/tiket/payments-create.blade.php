@extends('admin.partials.main')

@section('content')
<h3>Tambah Data Pembayaran</h3>

<form action="{{ route('payments-store') }}" method="POST" enctype="multipart/form-data">
    @csrf

    <div class="mb-3">
        <label for="id_user" class="form-label">Id User</label>
        <select name="id_user" id="id_user" class="form-control">
            @foreach ($users as $user)
                <option value="{{ $user->id }}">{{ $user->name }}</option>
            @endforeach
        </select>
    </div>

    <div class="mb-3">
    <label for="id_tiket" class="form-label">Tiket</label>
    {{-- <select name="id_tiket" id="id_tiket" class="form-control">
        @foreach ($tikets as $tiket)
            <option value="{{ $tiket->id }}">{{ $tiket->nama_tiket }}</option>
        @endforeach
    </select> --}}
    <input type="text" name="id_tiket" id="id_tiket" class="form-control">

</div>

<div class="mb-3">
    <label for="id_paket" class="form-label">Paket</label>
    {{-- <select name="id_paket" id="id_paket" class="form-control">
        @foreach ($pakets as $paket)
            <option value="{{ $paket->id }}">{{ $paket->nama_paket }}</option>
        @endforeach
    </select> --}}
    <input type="text" name="id_paket" id="id_tiket" class="form-control">

</div>

    <div class="mb-3">
        <label for="total_harga" class="form-label">Total Harga</label>
        <input type="number" name="total_harga" id="total_harga" class="form-control">
    </div>

    <div class="mb-3">
        <label for="bukti_pembayaran" class="form-label">Bukti Pembayaran</label>
        <input type="file" name="bukti_bayar" id="bukti_bayar" class="form-control">
    </div>

    <div class="mb-3">
        <label for="status" class="form-label">Status</label>
        <select name="status" id="status" class="form-control">
            <option value="1">Lunas</option>
            <option value="0">Belum Lunas</option>
        </select>
    </div>

    <button type="submit" class="btn btn-danger">Simpan</button>
</form>
@endsection

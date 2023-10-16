@extends('admin.partials.main')

@section('content')
<h3>Edit Pembayaran</h3>

<form action="{{ route('payments-update', $payment->id) }}" method="POST" enctype="multipart/form-data">
    @csrf
    @method('PUT')

    <div class="mb-3">
        <label for="id_user" class="form-label">Id User</label>
        <select name="id_user" id="id_user" class="form-control">
            @foreach ($users as $user)
                <option value="{{ $user->id }}" {{ $user->id == $payment->id_user ? 'selected' : '' }}>{{ $user->name }}</option>
            @endforeach
        </select>
    </div>

    <div class="mb-3">
        <label for="id_tiket" class="form-label">Id Tiket</label>
        <input type="number" name="id_tiket" id="id_tiket" class="form-control" value="{{ $payment->id_tiket }}">
    </div>

    <div class="mb-3">
        <label for="id_paket" class="form-label">Id Paket</label>
        <input type="number" name="id_paket" id="id_paket" class="form-control" value="{{ $payment->id_paket }}">
    </div>

    <div class="mb-3">
        <label for="total_harga" class="form-label">Total Harga</label>
        <input type="number" name="total_harga" id="total_harga" class="form-control" value="{{ $payment->total_harga }}">
    </div>

    <div class="mb-3">
        <label for="bukti_pembayaran" class="form-label">Bukti Pembayaran</label>
        <input type="file" name="bukti_bayar" id="bukti_bayar" class="form-control">
    </div>

    <div class="mb-3">
        <label for="status" class="form-label">Status</label>
        <select name="status" id="status" class="form-control">
            <option value="1" {{ $payment->status == 1 ? 'selected' : '' }}>Lunas</option>
            <option value="0" {{ $payment->status == 0 ? 'selected' : '' }}>Belum Lunas</option>
        </select>
    </div>

    <button type="submit" class="btn btn-danger">Simpan</button>
</form>
@endsection

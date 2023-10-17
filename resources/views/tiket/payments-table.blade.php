@extends('admin.partials.main')

@section('content')
<h3>Data Pembayaran</h3>
<div class="card">
    <div class="card-header">
        <a href="{{ route('payments-create') }}" class="btn btn-sm btn-warning">
            <i class="fas fa-plus-circle"></i> Tambah Data
        </a>
    </div>
    <div class="card-body">
        @if (session('msg'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Berhasil</strong> {{ session('msg') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif

        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Id Pembayaran</th>
                    <th scope="col">Id User</th>
                    <th scope="col">Id Tiket</th>
                    <th scope="col">Id Paket</th>
                    <th scope="col">Total Harga</th>
                    <th scope="col">Bukti Pembayaran</th>
                    <th scope="col">Status</th>
                    <th scope="col">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <?php $no = 1; ?>
                @foreach ($payments as $payment)
                    <tr>
                        <td>{{ $no++ }}</td>
                        <td>{{ $payment->id }}</td>
                        <td>{{ $payment->user->name }}</td>
                        <td>{{ $payment->id_tiket }}</td>
                        <td>{{ $payment->id_paket }}</td>
                        <td>{{ $payment->total_harga }}</td>
                        <td>
                          <img src="{{ asset('storage/bukti_bayar/' . $payment->bukti_bayar) }}" alt="Bukti Pembayaran"
                              width="100px">
                      </td>
                        <td>
                            {{ $payment->status == 1 ? 'Lunas' : 'Belum Lunas' }}
                        </td>
                        <td>
                            <a href="{{ route('payments-edit', $payment->id) }}" class="btn btn-sm btn-primary" title="Edit data">
                                <i class="fas fa-edit">Edit</i>
                            </a>
                        </td>
                        <td>
                            <form action="{{ route('payments-destroy', $payment->id) }}" method="post"
                                onsubmit="return confirm('Yakin data ini dihapus?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-sm btn-danger">Hapus</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection

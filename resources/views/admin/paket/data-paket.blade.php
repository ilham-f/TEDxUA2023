@extends('admin.partials.main')

@section('content')
<table class="table table-hover">
  <div class="card-header">
    <button type="button" class="btn btn btn-primary" onclick="window.location='{{ route('packets-create') }}'">
        <i class="fas fa-plus-circle"></i> Tambah Paket
    </button>
    </div>
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Nama Paket</th>
        <th scope="col">Detail Paket</th>
        <th scope="col">Harga</th>
        <th scope="col">Aksi</th>
      </tr>
    </thead>
    <tbody>
        <?php $no=1; ?>
        @foreach ($pakets as $paket)
            <tr>
            <td>{{ $no++ }}</td>
            <td>{{ $paket->nama_paket}}</td>
            <td>{{ $paket->detail_paket }}</td>
            <td>{{ $paket->harga }}</td>
            <td>
            {{-- link untuk melakukan update dan delete--}}
            <a href="{{ route('packets-edit', $paket->id) }}">Edit</a>
                            {{-- delete data --}}
                            <form action="{{ route('packets-update', $paket->id) }}">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger">Hapus</button>
                            </form>
            </td>
            </tr>
        @endforeach
    </tbody>
  </table>
@endsection
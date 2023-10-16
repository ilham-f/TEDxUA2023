@extends('admin.partials.main')

@section('content')
<table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Id</th>
        <th scope="col">Id User</th>
        <th scope="col">Id Paket</th>
        <th scope="col">Total Harga</th>
        <th scope="col">Status</th>
        <th scope="col">Aksi</th>
      </tr>
    </thead>
    <tbody>
        <?php $no=1; ?>
        @foreach ($tikets as $tiket)
            <tr>
            <td>{{ $no++ }}</td>
            <td>{{ $tiket->id}}</td>
            <td>{{ $tiket->id_user }}</td>
            <td>{{ $tiket->id_paket }}</td>
            <td>{{ $tiket->total_harga }}</td>
            <td>{{ $tiket->status }}</td>
            <td>
            {{-- link untuk melakukan update dan delete--}}
            <a href="#">Edit</a>
                            {{-- delete data --}}
                            <form action="#">
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
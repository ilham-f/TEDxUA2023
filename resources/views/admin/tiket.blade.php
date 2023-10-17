@extends('admin.partials.main')

@section('content')
<table class="table table-hover">
    <button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            <i class="bi bi-capsule"></i> Tambah Tiket
    </button>
    <section id="collapseOne" class=" accordion-collapse collapse section" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <div class="row">
                <div class="col-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Tambah Data Tiket</h4>
                        </div>
                        <div class="card-content">
                            <div class="card-body">
                                <form class="form form-horizontal" method="POST" action="/admin/tiket/store"
                                    data-parsley-validate>
                                    @csrf
                                    <div class="form-body">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <label>ID User</label>
                                            </div>
                                            <div class="col-md-8 form-group">
                                                <select name="id_user" id="id_user" class="form-control">
                                                    @foreach ($tikets as $tiket)
                                                        <option value="{{ $tiket->id_user }}">{{ $tiket->id_user }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                            <div class="col-md-4">
                                                <label>ID Paket</label>
                                            </div>
                                            <div class="col-md-8 form-group">
                                                <select name="id_paket" id="id_paket" class="form-control">
                                                    @foreach ($tikets as $tiket)
                                                        <option value="{{ $tiket->id_paket }}">{{ $tiket->id_paket }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                            <div class="col-sm-12 d-flex justify-content-end">
                                                <button type="submit" class="btn btn-primary me-1 mb-1">Tambah
                                                    Data Tiket</button>
                                                <button type="reset"
                                                    class="btn btn-light-secondary me-1 mb-1">Reset</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
                <button type="button" class="btn" data-bs-toggle="modal"
                    data-bs-target="#ubah{{ $tiket->id }}">
                    <i class="bi bi-pencil-fill">Edit</i>
                </button>
                <div class="modal fade text-left" id="ubah{{ $tiket->id }}" tabindex="-1"
                    role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                        role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="myModalLabel33">
                                    Ubah Tiket
                                </h4>
                                <button type="button" class="close" data-bs-dismiss="modal"
                                    aria-label="Close">
                                    <i data-feather="x"></i>
                                </button>
                            </div>
                            <form method="POST" action="/admin/tiket/ubah" data-parsley-validate>
                                @csrf
                                <div class="modal-body">
                                    <input type="hidden" name="id"
                                        value="{{ $tiket->id }}" />
                                    <label>ID User : </label>
                                    <div class="form-group">
                                        <input required type="text"
                                            value="{{ $tiket->id_user }}" name="id_user"
                                            placeholder="{{ $tiket->id_user }}" class="form-control"
                                            disabled />
                                    </div>
                                    <label>ID Paket : </label>
                                    <div class="form-group">
                                        <input required type="text"
                                            value="{{ $tiket->id_paket }}" name="id_paket"
                                            placeholder="{{ $tiket->id_paket }}" class="form-control"
                                            disabled />
                                    </div>
                                    <label>Total Harga : </label>
                                    <div class="form-group">
                                        <input required type="number"
                                            value="{{ $tiket->total_harga }}" name="total_harga"
                                            placeholder="{{ $tiket->total_harga }}" class="form-control"
                                            disabled />
                                    </div>
                                    <label>Status : </label>
                                    <div class="form-group">
                                        <select class="form-select" name="status" aria-placeholder="{{ $tiket->status }}">
                                            <option value="0"
                                                @if ($tiket->status == 0) selected @endif>
                                                Belum Konfirmasi</option>
                                            <option value="1"
                                                @if ($tiket->status == 1) selected @endif>
                                                Sudah Konfirmasi</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-light-secondary"
                                        data-bs-dismiss="modal">
                                        <i class="bx bx-x d-block d-sm-none"></i>
                                        <span class="d-none d-sm-block">Tutup</span>
                                    </button>
                                    <button type="submit" class="btn btn-primary ml-1"
                                        data-bs-dismiss="modal">
                                        <i class="bx bx-check d-block d-sm-none"></i>
                                        <span class="d-none d-sm-block">Ubah</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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

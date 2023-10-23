@extends('admin.partials.main')

@section('content')
<table class="table table-hover">
    @if (session('alert'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{ session('alert') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    @endif
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Nama</th>
        <th scope="col">Paket</th>
        <th scope="col">Harga</th>
        <th scope="col" class="text-center">Bukti Bayar</th>
        <th scope="col">Status</th>
        <th scope="col" class="text-center">Aksi</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($payments as $payment)
            <tr>
            <td>{{ $loop->iteration }}</td>
            <td>{{ $payment->tiket->user->name }}</td>
            <td>{{ $payment->tiket->paket->nama_paket }}</td>
            <td>{{ $payment->tiket->paket->harga }}</td>
            <td>
                <img style="display: block; height: 150px;" src="{{ asset('buktiPembayaran/'.$payment->bukti_bayar) }}" alt=""></td>
            <td>
                @php
                    if($payment->tiket->status == 2){
                        echo 'Unverified';
                    }
                    else if($payment->tiket->status == 3){
                        echo 'Verified';
                    }
                    else {
                        echo 'Waiting for payment';
                    }
                @endphp
            </td>
            <td>
            {{-- link untuk melakukan update dan delete--}}
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal"
                        data-bs-target="#ubah{{ $payment->id }}">
                        <i class="bi bi-pencil-fill">Edit</i>
                    </button>
                    <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal"
                        data-bs-target="#hapus{{ $payment->id }}">
                        <i class="bi bi-trash-fill">Hapus</i>
                    </button>
                </div>
                {{-- Modal Delete --}}
                <div class="modal fade text-left" id="hapus{{ $payment->id }}" tabindex="-1"
                    role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                        role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="text-end">
                                    <button type="button" class="btn-close text-end" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="mt-1">
                                    <h4>Yakin untuk menghapus?</h4>
                                    <p>Apakah benar anda ingin menghapus tiket dari {{ $payment->tiket->user->name }}?</p>
                                </div>
                                <div class="d-flex flex-row-reverse mt-3">
                                    <form action="/delete-tiket" method="post">
                                        @csrf
                                        <input type="hidden" name="tiket_id" value="{{ $payment->tiket_id }}" class="form-control col-6">
                                        <button class="btn btn-danger" type="submit" name="delete">Hapus</button>
                                    </form>
                                    <button class="btn btn-secondary me-2" data-bs-dismiss="modal">Batal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {{-- Modal Edit --}}
                <div class="modal fade text-left" id="ubah{{ $payment->id }}" tabindex="-1"
                    role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                        role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="myModalLabel33">
                                    Ubah
                                </h4>
                            </div>
                            <form method="POST" action="/tiket/{{ $payment->tiket->id }}" data-parsley-validate>
                                @csrf
                                <div class="modal-body overflow-y-scroll" style="height: 400px">
                                    <input type="hidden" name="id"
                                        value="{{ $payment->tiket->id }}" />
                                    <label>Nama</label>
                                    <div class="form-group">
                                        <input type="text" value="{{ $payment->tiket->user->name }}" class="form-control" readonly/>
                                    </div>
                                    <br>
                                    <label>Email</label>
                                    <div class="form-group">
                                        <input type="text" value="{{ $payment->tiket->user->email }}" class="form-control" readonly/>
                                    </div>
                                    <br>
                                    <label>Phone</label>
                                    <div class="form-group">
                                        <input type="text" value="{{ $payment->tiket->phone }}" class="form-control" readonly/>
                                    </div>
                                    <br>
                                    <label>Line</label>
                                    <div class="form-group">
                                        <input type="text" value="{{ $payment->tiket->line }}" class="form-control" readonly/>
                                    </div>
                                    <br>
                                    <label>Paket</label>
                                    <div class="form-group">
                                        <input type="text" value="{{ $payment->tiket->paket->nama_paket }}" class="form-control" readonly/>
                                    </div>
                                    <br>
                                    <label>Harga</label>
                                    <div class="form-group">
                                        <input type="number" value="{{ $payment->tiket->paket->harga }}" class="form-control" readonly/>
                                    </div>
                                    <br>
                                    <label>Status</label>
                                    <div class="form-group">
                                        <select class="form-select" name="status" aria-placeholder="{{ $payment->tiket->status }}">
                                            <option value="2"
                                                @if ($payment->tiket->status == 2) selected @endif>
                                                Unverified</option>
                                            <option value="3"
                                                @if ($payment->tiket->status == 3) selected @endif>
                                                Verified</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
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
            </td>
            </tr>
        @endforeach
    </tbody>
  </table>
@endsection

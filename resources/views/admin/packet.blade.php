@extends('admin.partials.main')

@section('content')
<table class="table table-hover">
    <button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseOne"
        aria-expanded="true" aria-controls="collapseOne">
        <i class="bi bi-capsule"></i> Tambah Paket
    </button>
    <section id="collapseOne" class="accordion-collapse collapse section" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <div class="row">
                <div class="col-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Tambah Data Paket</h4>
                        </div>
                        <div class="card-content">
                            <div class="card-body">
                                <form method="POST" action="{{ route('packets-store') }}" enctype="multipart/form-data">
                                    @csrf
                                    <div class="row mb-3">
                                        <label for="nama_paket" class="col-sm-2 col-form-label">Nama Paket</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control form-control-sm" id="nama_paket" name="nama_paket">
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="detail_paket" class="col-sm-2 col-form-label">Detail Paket</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control form-control-sm" id="detail_paket" name="detail_paket">
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="kuota" class="col-sm-2 col-form-label">Kuota</label>
                                        <div class="col-sm-10">
                                            <input type="number" class="form-control form-control-sm" id="kuota" name="kuota">
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="harga" class="col-sm-2 col-form-label">Harga</label>
                                        <div class="col-sm-10">
                                            <input type="number" class="form-control form-control-sm" id="harga" name="harga">
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="image" class="col-sm-2 col-form-label">Upload Image</label>
                                        <div class="col-sm-10">
                                            <input type="file" class="form-control form-control-sm" id="image" name="image" accept="image/*">
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-2"></div>
                                        <div class="col-sm-10">
                                            <img id="image-preview" src="" alt="Image Preview" style="max-width: 100px; max-height: 100px;">
                                            <script>
                                                const imageInput = document.getElementById('image');
                                                const imagePreview = document.getElementById('image-preview');

                                                imageInput.addEventListener('change', function () {
                                                    const file = imageInput.files[0];

                                                    if (file) {
                                                        const reader = new FileReader();

                                                        reader.onload = function (e) {
                                                            imagePreview.src = e.target.result;
                                                        };

                                                        reader.readAsDataURL(file);
                                                    } else {
                                                        imagePreview.src = '';
                                                    }
                                                });
                                            </script>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 d-flex justify-content-end">
                                        <button type="submit" class="btn btn-primary me-1 mb-1">Tambah Paket</button>
                                        <button type="reset" class="btn btn-light-secondary me-1 mb-1">Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Nama Paket</th>
        <th scope="col">Detail Paket</th>
        <th scope="col">Kuota</th>
        <th scope="col">Harga</th>
        <th scope="col">Image</th>
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
            <td>{{ $paket->kuota }}</td>
            <td>Rp{{ number_format($paket->harga, 2, ',', '.') }}</td>
            <td>
                <img src="{{ asset('storage/' . $paket->image) }}" alt="Image" style="max-width: 100px; max-height: 100px;">
            </td>
            <td>
                {{-- link untuk melakukan update--}}
                <div class="d-flex justify">
                    <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal"
                        data-bs-target="#ubah{{ $paket->id }}">
                        <i class="bi bi-pencil-fill">Edit</i>
                    </button>
                </div>
                {{-- Modal Edit --}}
                <div class="modal fade text-left" id="ubah{{ $paket->id }}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="myModalLabel33">
                                    Ubah
                                </h4>
                            </div>
                            <form method="post" action="{{ route('packets-update', $paket->id) }}" enctype="multipart/form-data">
                                @csrf
                                @method('put')
                                <div class="modal-body overflow-y-scroll" style="height: 400px">
                                    <input type="hidden" name="id" value="{{ $paket->id }}" />

                                    <label>Nama Paket</label>
                                    <div class="form-group">
                                        <input type="text" name="nama_paket" value="{{ $paket->nama_paket }}" class="form-control"/>
                                    </div>
                                    <br>

                                    <label>Detail Paket</label>
                                    <div class="form-group">
                                        <input type="text" name="detail_paket" value="{{ $paket->detail_paket }}" class="form-control"/>
                                    </div>
                                    <br>

                                    <label>Kuota</label>
                                    <div class="form-group">
                                        <input type="number" name="kuota" value="{{ $paket->kuota }}" class="form-control"/>
                                    </div>
                                    <br>

                                    <label>Harga</label>
                                    <div class="form-group">
                                        <input type="number" name="harga" value="{{ $paket->harga }}" class="form-control"/>
                                    </div>
                                    <br>

                                    <label for="image">Ganti Gambar</label>
                                    <div class="form-group">
                                        <input type="file" name="image" accept="image/*" class="form-control-file" id="image"/>
                                    </div>
                                    <br>

                                    <label>Gambar Saat Ini</label>
                                    <div class="form-group">
                                        <img src="{{ asset('storage/' . $paket->image) }}" alt="Image" style="max-width: 100px; max-height: 100px;">
                                    </div>
                                    <br>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                        <i class="bx bx-x d-block d-sm-none"></i>
                                        <span class="d-none d-sm-block">Tutup</span>
                                    </button>
                                    <button type="submit" class="btn btn-primary ml-1" data-bs-dismiss="modal">
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

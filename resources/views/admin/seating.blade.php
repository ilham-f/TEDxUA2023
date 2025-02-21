@extends('admin.partials.main')

@section('content')
<div class="container-fluid">
    <h2 class="text-center mb-4">Seating System</h2>

    <div class="row justify-content-center">

        <div class="col">
            <div class="d-flex justify-content-center flex-wrap">
                <!-- Example: 5 rows and 10 columns of seats -->
                <?php
                    $totalRows = 2;
                    $totalColumns = 8;

                    for ($col = 1; $col <= $totalColumns; $col++) {
                        echo '<div class="mb-2">';
                        for ($row = 1; $row <= $totalRows; $row++) {
                            $seatNumber = ($row - 1) * $totalColumns + $col;
                            $isSeatOccupied = false;

                            // Check if the seat is occupied
                            foreach ($tiketsToCheck as $tiket) {
                                if ($tiket->seat == $seatNumber) {
                                    $isSeatOccupied = true;
                                    break; // no need to continue checking if the seat is occupied
                                }
                            }

                            // Set the button class based on whether the seat is occupied or not
                            $buttonClass = $isSeatOccupied ? 'bg-success btn btn-success seat occupied' : 'btn btn-secondary seat';

                            // Output the button with the appropriate class
                            echo '<button class="' . $buttonClass . ' d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#seatModal' . $seatNumber . '" data-row="' . $row . '" data-col="' . $col . '">' . $seatNumber . '</button>';
                        }
                        echo '</div>';
                    }
                ?>
            </div>
        </div>

        <div class="col">
            <div class="d-flex justify-content-center flex-wrap">
                <!-- Example: 5 rows and 10 columns of seats -->
                <?php
                    $totalRows = 2;
                    $totalColumns = 8;
                    $seatnumber = 16;

                    for ($col = 1; $col <= $totalColumns; $col++) {
                        echo '<div class="mb-2">';
                        for ($row = 1; $row <= $totalRows; $row++) {
                            $seatNumber = $seatnumber+($row - 1) * $totalColumns + $col;
                            $isSeatOccupied = false;

                            // Check if the seat is occupied
                            foreach ($tiketsToCheck as $tiket) {
                                if ($tiket->seat == $seatNumber) {
                                    $isSeatOccupied = true;
                                    break; // no need to continue checking if the seat is occupied
                                }
                            }

                            // Set the button class based on whether the seat is occupied or not
                            $buttonClass = $isSeatOccupied ? 'bg-success btn btn-success seat occupied' : 'btn btn-secondary seat';

                            // Output the button with the appropriate class
                            echo '<button class="' . $buttonClass . ' d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#seatModal' . $seatNumber . '" data-row="' . $row . '" data-col="' . $col . '">' . $seatNumber . '</button>';
                        }
                        echo '</div>';
                    }
                ?>

            </div>
        </div>

    </div>

    <div class="row justify-content-center">

        <div class="col-md-3">
            <div class="d-flex justify-content-center flex-wrap">
                <!-- Example: 5 rows and 10 columns of seats -->
                <?php
                    $totalRows = 5;
                    $totalColumns = 4;
                    $seatnumber = 32;

                    for ($col = 1; $col <= $totalColumns; $col++) {
                        echo '<div class="mb-2">';
                        for ($row = 1; $row <= $totalRows; $row++) {
                            $seatNumber = $seatnumber+($row - 1) * $totalColumns + $col;
                            $isSeatOccupied = false;

                            // Check if the seat is occupied
                            foreach ($tiketsToCheck as $tiket) {
                                if ($tiket->seat == $seatNumber) {
                                    $isSeatOccupied = true;
                                    break; // no need to continue checking if the seat is occupied
                                }
                            }

                            // Set the button class based on whether the seat is occupied or not
                            $buttonClass = $isSeatOccupied ? 'bg-success btn btn-success seat occupied' : 'btn btn-secondary seat';

                            // Output the button with the appropriate class
                            echo '<button class="' . $buttonClass . ' d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#seatModal' . $seatNumber . '" data-row="' . $row . '" data-col="' . $col . '">' . $seatNumber . '</button>';
                        }
                        echo '</div>';
                    }
                ?>
            </div>
        </div>

        <div class="col-md-3">
            <div class="d-flex justify-content-center flex-wrap">
                <!-- Example: 5 rows and 10 columns of seats -->
                <?php
                    $totalRows = 5;
                    $totalColumns = 4;
                    $seatnumber = 52;

                    for ($col = 1; $col <= $totalColumns; $col++) {
                        echo '<div class="mb-2">';
                        for ($row = 1; $row <= $totalRows; $row++) {
                            $seatNumber = $seatnumber+($row - 1) * $totalColumns + $col;
                            $isSeatOccupied = false;

                            // Check if the seat is occupied
                            foreach ($tiketsToCheck as $tiket) {
                                if ($tiket->seat == $seatNumber) {
                                    $isSeatOccupied = true;
                                    break; // no need to continue checking if the seat is occupied
                                }
                            }

                            // Set the button class based on whether the seat is occupied or not
                            $buttonClass = $isSeatOccupied ? 'bg-success btn btn-success seat occupied' : 'btn btn-secondary seat';

                            // Output the button with the appropriate class
                            echo '<button class="' . $buttonClass . ' d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#seatModal' . $seatNumber . '" data-row="' . $row . '" data-col="' . $col . '">' . $seatNumber . '</button>';
                        }
                        echo '</div>';
                    }
                ?>
            </div>
        </div>

        <div class="col-md-3">
            <div class="d-flex justify-content-center flex-wrap">
                <!-- Example: 5 rows and 10 columns of seats -->
                <?php
                    $totalRows = 5;
                    $totalColumns = 4;
                    $seatnumber = 72;

                    for ($col = 1; $col <= $totalColumns; $col++) {
                        echo '<div class="mb-2">';
                        for ($row = 1; $row <= $totalRows; $row++) {
                            $seatNumber = $seatnumber+($row - 1) * $totalColumns + $col;
                            $isSeatOccupied = false;

                            // Check if the seat is occupied
                            foreach ($tiketsToCheck as $tiket) {
                                if ($tiket->seat == $seatNumber) {
                                    $isSeatOccupied = true;
                                    break; // no need to continue checking if the seat is occupied
                                }
                            }

                            // Set the button class based on whether the seat is occupied or not
                            $buttonClass = $isSeatOccupied ? 'bg-success btn btn-success seat occupied' : 'btn btn-secondary seat';

                            // Output the button with the appropriate class
                            echo '<button class="' . $buttonClass . ' d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#seatModal' . $seatNumber . '" data-row="' . $row . '" data-col="' . $col . '">' . $seatNumber . '</button>';
                        }
                        echo '</div>';
                    }
                ?>
            </div>
        </div>
    </div>

    <div class="row justify-content-center">

        <div class="col">
            <div class="d-flex justify-content-center flex-wrap">
                <!-- Example: 5 rows and 10 columns of seats -->
                <?php
                    $totalRows = 2;
                    $totalColumns = 6;
                    $seatnumber = 92;

                    for ($col = 1; $col <= $totalColumns; $col++) {
                        echo '<div class="mb-2">';
                        for ($row = 1; $row <= $totalRows; $row++) {
                            $seatNumber = $seatnumber + ($row - 1) * $totalColumns + $col;
                            $isSeatOccupied = false;

                            // Check if the seat is occupied
                            foreach ($tiketsToCheck as $tiket) {
                                if ($tiket->seat == $seatNumber) {
                                    $isSeatOccupied = true;
                                    break; // no need to continue checking if the seat is occupied
                                }
                            }

                            // Set the button class based on whether the seat is occupied or not
                            $buttonClass = $isSeatOccupied ? 'bg-success btn btn-success seat occupied' : 'btn btn-secondary seat';

                            // Output the button with the appropriate class
                            echo '<button class="' . $buttonClass . ' d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#seatModal' . $seatNumber . '" data-row="' . $row . '" data-col="' . $col . '">' . $seatNumber . '</button>';
                        }
                        echo '</div>';
                    }
                ?>
            </div>
        </div>

        <div class="col">
            <div class="d-flex justify-content-center flex-wrap">
                <!-- Example: 5 rows and 10 columns of seats -->
                <?php
                    $totalRows = 2;
                    $totalColumns = 6;
                    $seatnumber = 104;

                    for ($col = 1; $col <= $totalColumns; $col++) {
                        echo '<div class="mb-2">';
                        for ($row = 1; $row <= $totalRows; $row++) {
                            $seatNumber = $seatnumber + ($row - 1) * $totalColumns + $col;
                            $isSeatOccupied = false;

                            // Check if the seat is occupied
                            foreach ($tiketsToCheck as $tiket) {
                                if ($tiket->seat == $seatNumber) {
                                    $isSeatOccupied = true;
                                    break; // no need to continue checking if the seat is occupied
                                }
                            }

                            // Set the button class based on whether the seat is occupied or not
                            $buttonClass = $isSeatOccupied ? 'bg-success btn btn-success seat occupied' : 'btn btn-secondary seat';

                            // Output the button with the appropriate class
                            echo '<button class="' . $buttonClass . ' d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#seatModal' . $seatNumber . '" data-row="' . $row . '" data-col="' . $col . '">' . $seatNumber . '</button>';
                        }
                        echo '</div>';
                    }
                ?>
            </div>
        </div>
    </div>
</div>

<!-- Seat Modal -->
@for ($i = 1; $i <= 116; $i++)
    <div class="modal fade" id="seatModal{{ $i }}" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <form action="/edit-seat" method="post">
                @csrf
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Seat {{ $i }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input name="seat" type="hidden" value="{{ $i }}">
                        <select style="width: 100%" class="w-100 mySelect2" name="tiket_id">
                            <option selected value="0">-- Pilih Peserta --</option>
                            @foreach ($tikets as $tiket )
                                @if ($tiket->seat == $i)
                                    <option selected value="{{ $tiket->id }}">{{ $tiket->user->name }}</option>
                                @else
                                    <option value="{{ $tiket->id }}">{{ $tiket->user->name }}</option>
                                @endif
                            @endforeach
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-success">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endfor

<script>
    // document.addEventListener('DOMContentLoaded', function () {
    //     const seats = document.querySelectorAll('.seat');

    //     seats.forEach(seat => {
    //         seat.addEventListener('click', () => {
    //             if (!seat.classList.contains('occupied')) {
    //                 seat.classList.toggle('selected');
    //             }
    //         });
    //     });

    //     document.getElementById('btnCheckout').addEventListener('click', () => {
    //         const selectedSeats = document.querySelectorAll('.seat.selected');
    //         const selectedSeatsArray = Array.from(selectedSeats);
    //         const seatNumbers = selectedSeatsArray.map(seat => `${seat.dataset.row} - ${seat.dataset.col}`);

    //         alert(`Selected Seats: ${seatNumbers.join(', ')}`);
    //     });
    // });
</script>
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

<script>
    $(document).ready(function () {

        for (let i = 1; i <= 116; i++) {

            $('#seatModal'+i).on('show.bs.modal', function() {
                $('.mySelect2').select2({
                    dropdownParent: $('#seatModal'+i).find('.modal-body')
                });
            });

        }
        // $('#mySelect2').select2();
    });
</script>

@endsection

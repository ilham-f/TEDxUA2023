<!doctype html>
<html lang="en">
<head>
    <title>TEDxUniversitasAirlangga</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="{{ asset('assets/css/styles.css') }}">
</head>
<body>
	<div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3 text-danger">
                            <label for="reg-log" style="cursor: pointer">Sign In</label>
                            <label for="reg-log" style="margin-left: 30px; cursor:pointer">Sign Up</label>
                        </h6>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label class="bg-danger" for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="text-danger mb-4 pb-3">Sign In</h4>
                                            <form action="/login" method="post">
                                                @csrf
                                                <div class="form-group">
                                                    <input name="email" type="text" class="form-style" placeholder="Email">
                                                    <i class="text-danger input-icon uil uil-phone"></i>
                                                </div>
                                                <div class="form-group mt-2">
                                                    <input name="password" type="password" class="form-style" placeholder="Password">
                                                    <i class="text-danger input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <button type="submit" class="bg-danger btn mt-4">Log in</button type="submit">
                                            </form>
                                            {{-- <p class="mb-0 mt-4 text-center"><a href="" class="link">Forgot your password?</a></p> --}}
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="text-danger mb-3 pb-3">Sign Up</h4>
                                            <form action="/regis" method="post">
                                                @csrf
                                                <div class="form-group">
                                                    <input name="name" type="text" class="form-style" placeholder="Full Name">
                                                    <i class="text-danger input-icon uil uil-user"></i>
                                                </div>
                                                <div class="form-group mt-2">
                                                    <input name="email" type="tel" class="form-style" placeholder="Email">
                                                    <i class="text-danger input-icon uil uil-phone"></i>
                                                </div>
                                                <div class="form-group mt-2">
                                                    <input name="password" type="password" class="form-style" placeholder="Password">
                                                    <i class="text-danger input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <div class="form-group mt-2">
                                                    <input name="password_confirmation" type="password" class="form-style" placeholder="Password Confirmation">
                                                    <i class="text-danger input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <button type="submit" class="bg-danger btn mt-4">Register</button>
                                            </form>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
</body>
</html>

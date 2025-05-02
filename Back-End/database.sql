create if not exists database tukanglaundry;
use tukanglaundry;

create table users (
    id int primary key auto_increment,
    email varchar(255) not null,
    password varchar(255) not null,
    name varchar(255) not null,
    role enum('admin', 'user') not null default 'user'
);

create table paket(
    id int primary key auto_increment,
    nama varchar(255) not null,
    harga_per_kg decimal(10,2) not null,
    status enum('Aktif', 'Tidak Aktif')
);

create table pesanan(
    id int primary key auto_increment,
    user_id int not null,
    paket_id int not null,
    status enum('Proses', 'Selesai') not null,
    catatan text,
    berat_kg decimal(10,2) not null,
    nama_pelanggan varchar(255) not null,
    tanggal_pesan datetime not null,
    tanggal_selesai datetime,
    foreign key (user_id) references users(id),
    foreign key (paket_id) references paket(id)
);


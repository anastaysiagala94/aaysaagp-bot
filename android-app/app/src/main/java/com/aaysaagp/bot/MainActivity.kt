package com.aaysaagp.bot

import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity: AppCompatActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    val tv = TextView(this).apply {
      text = "AAYSAAGP Bot\nAnastaysia @ Your Service"
      textSize = 18f
      setPadding(16,16,16,16)
    }
    setContentView(tv)
  }
}